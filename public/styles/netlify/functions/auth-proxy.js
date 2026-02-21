import fs from "fs";
import path from "path";

const VALID_USER = "tenwords";
const VALID_PASS = "tenwords2026";

export async function handler(event) {
  const auth = event.headers.authorization || "";

  if (!auth.startsWith("Basic ")) {
    return { statusCode: 401, headers: { "WWW-Authenticate": 'Basic realm="Protected"' }, body: "Unauthorized" };
  }

  const base64Credentials = auth.split(" ")[1];
  const [user, pass] = Buffer.from(base64Credentials, "base64").toString().split(":");

  if (user !== VALID_USER || pass !== VALID_PASS) {
    return { statusCode: 401, headers: { "WWW-Authenticate": 'Basic realm="Protected"' }, body: "Unauthorized" };
  }

  let urlPath = event.path.replace(/^\/kundenlogin\/account/, "") || "/";
  const filePath = path.join(process.cwd(), "dist/kundenlogin/account", urlPath, "index.html");

  try {
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    return { statusCode: 200, headers: { "Content-Type": "text/html" }, body: fileContent };
  } catch (err) {
    return { statusCode: 404, body: "Not Found" };
  }
}