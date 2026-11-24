export const tools = [
 {slug:'profit-margin',name:'Profit Margin Calculator',category:'Business',description:'Calculate profit, margin, and markup instantly.',icon:'chart'},
 {slug:'discount',name:'Discount Calculator',category:'Finance',description:'Find sale prices and total savings.',icon:'tag'},
 {slug:'loan-payment',name:'Loan Payment Calculator',category:'Finance',description:'Estimate monthly payments and interest.',icon:'wallet'},
 {slug:'vat',name:'VAT / Sales Tax Calculator',category:'Business',description:'Add or extract tax from a price.',icon:'receipt'},
 {slug:'word-counter',name:'Word & Character Counter',category:'Writing',description:'Count words, characters, sentences, and reading time.',icon:'type'},
 {slug:'utm-builder',name:'UTM Link Builder',category:'Marketing',description:'Build trackable campaign links.',icon:'link'},
 {slug:'qr-generator',name:'QR Code Generator',category:'Utilities',description:'Generate a downloadable QR code for any URL or text.',icon:'qr'},
 {slug:'percentage',name:'Percentage Calculator',category:'Math',description:'Find percentages and percentage changes.',icon:'percent'}
] as const;
export type ToolSlug = typeof tools[number]['slug'];
export const findTool = (slug:string)=>tools.find(t=>t.slug===slug);
