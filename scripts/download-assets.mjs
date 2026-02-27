#!/usr/bin/env node
// Downloads all Figma CDN assets to /public/assets/ and prints updated assets.ts content

import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const OUT_DIR = new URL("../public/assets/", import.meta.url).pathname;
mkdirSync(OUT_DIR, { recursive: true });

const assets = {
  // LOGIN
  GOOGLE_ICON:              ["https://www.figma.com/api/mcp/asset/34f7c465-38bc-4043-a6ab-c8b25500c840", "google-icon\.svg"],

  // SIDEBAR
  ICON_HOME:                ["https://www.figma.com/api/mcp/asset/6677abc9-cd33-4f2b-b1b4-b5f2d4e91f1a", "icon-home\.svg"],
  ICON_PERMISSIONS:         ["https://www.figma.com/api/mcp/asset/9ff6fa6b-d578-42e0-af1c-59e6ee16581d", "icon-permissions\.svg"],
  ICON_PARTNERS:            ["https://www.figma.com/api/mcp/asset/014b0f34-5779-4d59-bc6c-a3d7f741431f", "icon-partners\.svg"],
  ICON_PAYMENTS:            ["https://www.figma.com/api/mcp/asset/1a4924c4-ed44-42e9-80b1-cb494109c5df", "icon-payments\.svg"],
  ICON_LOGOUT:              ["https://www.figma.com/api/mcp/asset/b4c203a9-9f6c-4a2e-af4b-5658ef2a03de", "icon-logout\.svg"],
  ICON_PLUS_H:              ["https://www.figma.com/api/mcp/asset/184da09b-58ba-4796-8346-6f9d1d2ac4e5", "icon-plus-h\.svg"],
  ICON_PLUS_V:              ["https://www.figma.com/api/mcp/asset/64b903db-d00c-4373-9b85-373da42f253b", "icon-plus-v\.svg"],

  // HEADER
  USER_AVATAR:              ["https://www.figma.com/api/mcp/asset/9c4a0b52-2509-49ef-a720-e2ebb959a58e", "user-avatar\.svg"],
  ICON_BELL:                ["https://www.figma.com/api/mcp/asset/508ffad2-c487-4cab-9748-161b17c8e6bc", "icon-bell\.svg"],
  NOTIF_DOT_RED:            ["https://www.figma.com/api/mcp/asset/5cd54f02-446e-4a83-8fca-cb74b0c6159a", "notif-dot-red\.svg"],
  NOTIF_DOT_BLUE:           ["https://www.figma.com/api/mcp/asset/e58f9c77-9da5-4fad-9567-41e76ca225c2", "notif-dot-blue\.svg"],
  ICON_INFO:                ["https://www.figma.com/api/mcp/asset/1b6c4b98-9bbf-459c-a0cf-db8164c3e322", "icon-info\.svg"],
  ICON_CHEVRON_DOWN:        ["https://www.figma.com/api/mcp/asset/e7a5e322-92c2-47f3-9b48-29a92c3deec9", "icon-chevron-down\.svg"],

  // CONTENT
  ICON_SUN:                 ["https://www.figma.com/api/mcp/asset/2dc86b56-b75b-417f-bd06-e9e86376e1b0", "icon-sun\.svg"],
  LOGO_WORDPRESS:           ["https://www.figma.com/api/mcp/asset/2682522c-79de-4e33-8ae4-50a496848be2", "logo-wordpress\.svg"],
  LOGO_GOOGLE_CLOUD:        ["https://www.figma.com/api/mcp/asset/bd816e16-bc64-4788-9c7a-b3c15ead0a42", "logo-google-cloud\.svg"],
  CARD_DIVIDER:             ["https://www.figma.com/api/mcp/asset/0ab4a085-6f8b-43de-a792-0947ee71db72", "card-divider\.svg"],
  ICON_MANAGE_ARROW:        ["https://www.figma.com/api/mcp/asset/8fa3d8e1-2bd8-4b59-8a5b-618ee7363e8d", "icon-manage-arrow\.svg"],
  ICON_PLAN_ARROW:          ["https://www.figma.com/api/mcp/asset/28c8521f-1e59-4591-acd0-1521465b33dc", "icon-plan-arrow\.svg"],

  // BG ELLIPSES
  BG_ELLIPSE_TOP:           ["https://www.figma.com/api/mcp/asset/7e5ba66f-e9be-49cf-b47a-84c83eb04ce5", "bg-ellipse-top\.svg"],
  BG_ELLIPSE_BOTTOM:        ["https://www.figma.com/api/mcp/asset/8c0fad63-6b88-4e04-8a72-d1424647da65", "bg-ellipse-bottom\.svg"],

  // PROFILE MENU
  ICON_PROFILE_USER:        ["https://www.figma.com/api/mcp/asset/7012e232-4591-46a0-9367-b383a5901f7e", "icon-profile-user\.svg"],
  ICON_PROFILE_LOCK:        ["https://www.figma.com/api/mcp/asset/709a4d92-abef-4e95-9a90-fc173a5ccad3", "icon-profile-lock\.svg"],
  ICON_PROFILE_MAIL:        ["https://www.figma.com/api/mcp/asset/ec26e215-c071-4bfd-8900-ff97a21b24fc", "icon-profile-mail\.svg"],
  ICON_PROFILE_SWITCH:      ["https://www.figma.com/api/mcp/asset/f427bc85-b21d-4a7a-9362-771c083dc94e", "icon-profile-switch\.svg"],
  ICON_PROFILE_POWER:       ["https://www.figma.com/api/mcp/asset/671cb20a-4ec2-4bb9-852c-1d613580e8c7", "icon-profile-power\.svg"],

  // NOTIFICATIONS
  NOTIF_INFO_ICON:          ["https://www.figma.com/api/mcp/asset/d5501b5b-ff3b-4a6e-ae39-07803551d838", "notif-info-icon\.svg"],

  // MANAGE MENU
  ICON_MANAGE_SERVER:       ["https://www.figma.com/api/mcp/asset/1ae5315e-7638-4835-b432-c1f56d57ef81", "icon-manage-server\.svg"],
  ICON_MANAGE_DETAILS:      ["https://www.figma.com/api/mcp/asset/f652d936-5e40-4e4f-8615-bf23dadc2ca7", "icon-manage-details\.svg"],
  ICON_MANAGE_SWITCH:       ["https://www.figma.com/api/mcp/asset/8459183a-377a-402a-adce-4f9dbacffc41", "icon-manage-switch\.svg"],
  ICON_MANAGE_CANCEL:       ["https://www.figma.com/api/mcp/asset/ef8548f2-17a7-4889-ae96-4f46526e248e", "icon-manage-cancel\.svg"],

  // QUICK ACTIONS
  ICON_QA_TRANSFER_HOST:    ["https://www.figma.com/api/mcp/asset/e5e0da39-8677-4622-9c6d-dd1d167d5983", "icon-qa-transfer-host\.svg"],
  ICON_QA_TRANSFER_CLIENT:  ["https://www.figma.com/api/mcp/asset/19423da0-ab97-471d-a3f1-c8734edf3567", "icon-qa-transfer-client\.svg"],
  ICON_QA_BUY_DOMAIN:       ["https://www.figma.com/api/mcp/asset/485a670e-953b-419c-88f5-5209c334bb40", "icon-qa-buy-domain\.svg"],
  ICON_QA_TRANSFER_DOMAIN:  ["https://www.figma.com/api/mcp/asset/6f40dcb2-aa51-4681-868c-b766f51d6635", "icon-qa-transfer-domain\.svg"],
  ICON_QA_CREDIT_CARD:      ["https://www.figma.com/api/mcp/asset/67198568-4a4e-4771-adb6-a9f484bd59a5", "icon-qa-credit-card\.svg"],
  ICON_QA_INVOICES:         ["https://www.figma.com/api/mcp/asset/d006b55d-7b1e-4255-b894-f38691fb2b44", "icon-qa-invoices\.svg"],
  ICON_QA_SUPPORT:          ["https://www.figma.com/api/mcp/asset/2ec99c5b-78ea-4f13-8d43-4d71c1fdda79", "icon-qa-support\.svg"],
  ICON_QA_CANCEL:           ["https://www.figma.com/api/mcp/asset/69bc9699-421e-43ed-8ef8-cf39e148f061", "icon-qa-cancel\.svg"],

  // PAYMENTS
  CARD_BG_MASK:             ["https://www.figma.com/api/mcp/asset/1e5e18e5-777c-43bf-8a20-ed6ebf337882", "card-bg-mask\.svg"],
  CARD_CHIP_PATTERN:        ["https://www.figma.com/api/mcp/asset/33902d1b-a6c1-4ad8-b040-fc0855bb192d", "card-chip-pattern\.svg"],
  ICON_PENCIL:              ["https://www.figma.com/api/mcp/asset/34d0c308-d678-46ae-9dd4-fd0e532dd139", "icon-pencil\.svg"],

  // PARTNERS
  PARTNERS_CIRCLE:          ["https://www.figma.com/api/mcp/asset/819bc6cd-b52c-4d37-9720-f8abd219d8f5", "partners-circle\.svg"],
  PARTNERS_IDENTIFIER_1:    ["https://www.figma.com/api/mcp/asset/8f59d8db-2fd2-455d-93fa-31ef6345e411", "partners-identifier-1\.svg"],
  PARTNERS_IDENTIFIER_2:    ["https://www.figma.com/api/mcp/asset/4304c7f1-d817-4a14-8b64-5ecf4d89bc34", "partners-identifier-2\.svg"],
  PARTNERS_DIVIDER:         ["https://www.figma.com/api/mcp/asset/fd12bc41-8a55-4839-868a-4aff684392f6", "partners-divider\.svg"],
  PARTNERS_CHART_LINES:     ["https://www.figma.com/api/mcp/asset/5d410f42-5114-43c6-9998-4b8ce31b4d37", "partners-chart-lines\.svg"],
  PARTNERS_ICON_CLICKS:     ["https://www.figma.com/api/mcp/asset/eaabba21-84f1-45d8-a71d-6ae8c80f5501", "partners-icon-clicks\.svg"],
  PARTNERS_ICON_SIGNUPS:    ["https://www.figma.com/api/mcp/asset/4ba102b4-cc62-4a57-ba37-fe4a5f4f916f", "partners-icon-signups\.svg"],
  PARTNERS_ICON_CONVERSION: ["https://www.figma.com/api/mcp/asset/c1d80f3c-10da-47de-a80b-e6df5138fd69", "partners-icon-conversion\.svg"],
};

async function download(url, filename) {
  const dest = path.join(OUT_DIR, filename);
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  await pipeline(res.body, createWriteStream(dest));
  return dest;
}

let ok = 0, fail = 0;
for (const [name, [url, filename]] of Object.entries(assets)) {
  process.stdout.write(`  Downloading ${name} → ${filename} ... `);
  try {
    await download(url, filename);
    console.log("✓");
    ok++;
  } catch (e) {
    console.log(`✗ (${e.message})`);
    fail++;
  }
}

console.log(`\nDone: ${ok} ok, ${fail} failed`);
console.log(`Files saved to: public/assets/`);
