import { z } from "zod";

export const LoginInputSchema = z.object({
  password: z.string().min(1, "パスワードを入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("不正なメールアドレス形式です"),
});
