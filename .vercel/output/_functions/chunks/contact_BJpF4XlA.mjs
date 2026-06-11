import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { z } from 'zod';

const prerender = false;
const resend = new Resend("re_37XADhU6_AiSpZ1P9vuyJSQEnELR3cFin");
const ratelimit = new Ratelimit({
  redis: new Redis({
    url: "https://sua-url.upstash.io",
    token: "sua_token_aqui"
  }),
  limiter: Ratelimit.slidingWindow(3, "10 m"),
  prefix: "contact"
});
const SERVICE_LABELS = {
  "legaltech-automacao": "Automações para escritório de advocacia",
  "legaltech-sistema": "Sistema jurídico sob medida",
  appsec: "AppSec e Segurança de Aplicações",
  dev: "APIs e Produtos Web",
  other: "Ainda não sei, quero conversar"
};
const contactSchema = z.object({
  name: z.string().min(1).max(100).transform((v) => v.trim()),
  email: z.string().email().max(254).regex(/^[^\r\n,<>]+$/).transform((v) => v.trim()),
  company: z.string().max(150).transform((v) => v.trim()).optional().default(""),
  service: z.enum(["legaltech-automacao", "legaltech-sistema", "appsec", "dev", "other", ""]).default(""),
  message: z.string().min(1).max(5e3).transform((v) => v.trim())
});
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
const POST = async ({ request, clientAddress }) => {
  const { success, reset } = await ratelimit.limit(clientAddress);
  if (!success) {
    const retryAfter = Math.ceil((reset - Date.now()) / 1e3);
    return new Response(JSON.stringify({ error: "Muitas tentativas. Tente novamente em alguns minutos." }), {
      status: 429,
      headers: { "Content-Type": "application/json", "Retry-After": String(retryAfter) }
    });
  }
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return new Response(JSON.stringify({ error: "Requisição inválida." }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Dados inválidos.", details: parsed.error.flatten().fieldErrors }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const { name, email, company, service, message } = parsed.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const safeService = service ? SERVICE_LABELS[service] : "";
  const safeSubject = name.replace(/[\r\n]/g, " ").slice(0, 100);
  const { error } = await resend.emails.send({
    from: `Site <${"contato@jeanreis.dev.br"}>`,
    to: "jeanreis.developer@gmail.com",
    replyTo: email,
    subject: `[Site] Nova mensagem de ${safeSubject}`,
    html: `
      <p><strong>Nome:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${safeCompany ? `<p><strong>Empresa:</strong> ${safeCompany}</p>` : ""}
      ${safeService ? `<p><strong>Serviço:</strong> ${safeService}</p>` : ""}
      <p><strong>Mensagem:</strong></p>
      <p>${safeMessage}</p>
    `
  });
  if (error) {
    return new Response(JSON.stringify({ error: "Erro ao enviar mensagem." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
