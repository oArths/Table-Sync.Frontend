import { NextResponse } from "next/server";
import { doc } from "../services/google-spreadsheet";
interface IUser {
  email: string;
  password: string;
}
export async function POST({ email, password }: IUser) {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["data"];
    const rows = await sheet.getRows();
    const user = rows.find(
      (item) =>
        item.get("email") === email &&
        item.get("password") === password &&
        item.get("active") === "TRUE"
    );

    if (!user) {
      throw new Error("Credenciais invalidas");
    }
    return NextResponse.json({ message: user?.toObject() }, { status: 200 });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Erro desconhecido";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
