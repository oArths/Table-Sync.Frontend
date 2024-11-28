import { NextResponse } from "next/server";
import { doc } from "../services/google-spreadsheet";
interface IUser {
  email: string;
  password: string;
}
export async function POST(request: Request) {
  const body: IUser = await request.json();
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["data"];
    const rows = await sheet.getRows();
    const user = rows.find(
      (item) =>
        item.get("email") === body.email &&
        item.get("password") === body.password &&
        item.get("active") === "TRUE"
    );
    if (!user) {
      throw new Error("Usuario não encontrado ou desativado");
    }
    return NextResponse.json({ message: user?.toObject() }, { status: 200 });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Erro desconhecido";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
