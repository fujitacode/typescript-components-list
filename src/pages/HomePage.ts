import { Heading } from "../components/Heading/Heading";
import { Text } from "../components/Text/Text";

export const HomePage = () => `
  ${Heading("--見出しパーツ--", { size: "1" })}
  ${Heading("大見出し１", { size: "1" })}
  ${Heading("大見出し２", { size: "2" })}
  ${Heading("大見出し３", { size: "3" })}
  ${Heading("小見出し４", { size: "4" })}
  ${Heading("小見出し５", { size: "5" })}
  ${Heading("小見出し６", { size: "6" })}

  ${Heading("大見出し１", { size: "1", align: "center" })}
  ${Heading("大見出し２", { size: "2", align: "center" })}
  ${Heading("大見出し３", { size: "3", align: "center" })}
  ${Heading("小見出し４", { size: "4", align: "center" })}
  ${Heading("小見出し５", { size: "5", align: "center" })}
  ${Heading("小見出し６", { size: "6", align: "center" })}

  ${Heading("大見出し１", { size: "1", align: "right" })}
  ${Heading("大見出し２", { size: "2", align: "right" })}
  ${Heading("大見出し３", { size: "3", align: "right" })}
  ${Heading("小見出し４", { size: "4", align: "right" })}
  ${Heading("小見出し５", { size: "5", align: "right" })}
  ${Heading("小見出し６", { size: "6", align: "right" })}

  ${Heading("--本文パーツ--", { size: "1" })}
  ${Text("【標準】本文テキスト")}
  ${Text("【強調】本文テキスト", { modifiers: ["bold"] })}
  ${Text("【斜体】本文テキスト", { modifiers: ["italic"] })}
  ${Text("【下線】本文テキスト", { modifiers: ["underline"] })}
  ${Text("【取り消し】本文テキスト", { modifiers: ["strike"] })}
  ${Text("【モザイク】本文テキスト", { modifiers: ["mosaic"] })}
  ${Text("【大文字】本文テキスト", { variant: "lead" })}
  ${Text("【小文字】本文テキスト", { variant: "small" })}
  ${Text("【注釈】※本文テキスト", { variant: "muted" })}

  ${Text("【標準】本文テキスト", { align: "center" })}
  ${Text("【強調】本文テキスト", { modifiers: ["bold"], align: "center" })}
  ${Text("【斜体】本文テキスト", { modifiers: ["italic"], align: "center" })}
  ${Text("【下線】本文テキスト", { modifiers: ["underline"], align: "center" })}
  ${Text("【取り消し】本文テキスト", { modifiers: ["strike"], align: "center" })}
  ${Text("【モザイク】本文テキスト", { modifiers: ["mosaic"], align: "center" })}
  ${Text("【大文字】本文テキスト", { variant: "lead", align: "center" })}
  ${Text("【小文字】本文テキスト", { variant: "small", align: "center" })}
  ${Text("【注釈】※本文テキスト", { variant: "muted", align: "center" })}

  ${Text("【標準】本文テキスト", { align: "right" })}
  ${Text("【強調】本文テキスト", { modifiers: ["bold"], align: "right" })}
  ${Text("【斜体】本文テキスト", { modifiers: ["italic"], align: "right" })}
  ${Text("【下線】本文テキスト", { modifiers: ["underline"], align: "right" })}
  ${Text("【取り消し】本文テキスト", { modifiers: ["strike"], align: "right" })}
  ${Text("【モザイク】本文テキスト", { modifiers: ["mosaic"], align: "right" })}
  ${Text("【大文字】本文テキスト", { variant: "lead", align: "right" })}
  ${Text("【小文字】本文テキスト", { variant: "small", align: "right" })}
  ${Text("【注釈】※本文テキスト", { variant: "muted", align: "right" })}
`;
