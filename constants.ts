import { Question } from './types';

export const QUIZ_TITLE = 'CHE Calculate Mole';
export const TOTAL_QUESTIONS_PER_QUIZ = 10;

// Auto-parsed from the provided Google Form link
export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd77AOWGYiC6QWqKQLs1ktDX2Mz2gSs5D7-9AFEKM18QG2dFQ/formResponse';
export const GOOGLE_FORM_ENTRY_IDS = {
  submissionTime: 'entry.1104502796',
  name: 'entry.1734280046',
  branch: 'entry.324392523',
  grade: 'entry.334192525',
  score: 'entry.1197406020',
  accuracy: 'entry.331240590',
  quizTheme: 'entry.1909146688',
  reportLink: 'entry.2063783972'
};


// Questions extracted from the provided images
export const ALL_QUESTIONS: Question[] = [
  {
    question: "6.25g of a compound contains $1.5 \\times 10^{23}$ molecules. Calculate the molar mass of this compound. (Avogadro's constant, $6 \\times 10^{23}$)<br/><br/>6.25g suatu sebatian mengandungi $1.5 \\times 10^{23}$ moelkul. Kira jisim molar sebatian ini.",
    options: ["20 g/mol", "25 g/mol", "30 g/mol", "40 g/mol"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算物质的摩尔数 (n):**\n    摩尔数 = 分子数 / 阿伏伽德罗常数\n    $n = \\frac{1.5 \\times 10^{23}}{6 \\times 10^{23}} = 0.25$ mol\n\n2.  **计算摩尔质量 (Molar Mass):**\n    摩尔质量 = 质量 (m) / 摩尔数 (n)\n    Molar Mass = $\\frac{6.25 g}{0.25 mol} = 25$ g/mol\n\n    **答案是 25 g/mol。**"
  },
  {
    question: "A jar of gas contains chlorine gas ($Cl_{2}$) of mass equal to 8g of oxygen gas ($O_{2}$). Calculate the number of chlorine atoms in this jar of gas. (JAR: O=16; Avogadro's constant, $6 \\times 10^{23}$)<br/><br/>Suatu balang gas mengandungi gas klorin, $Cl_{2}$ berjisim sama dengan 8g gas oksigen, $O_{2}$. Kira bilangan atom klorin dalam balang gas ini.",
    options: ["$1.5 \\times 10^{23}$", "$3 \\times 10^{23}$", "$6 \\times 10^{23}$", "$1.2 \\times 10^{24}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算8g氧气 ($O_{2}$) 的摩尔数:**\n    $O_{2}$ 的摩尔质量 = $16 \\times 2 = 32$ g/mol\n    $n(O_{2}) = \\frac{8 g}{32 g/mol} = 0.25$ mol\n\n2.  **确定氯气 ($Cl_{2}$) 的摩尔数:**\n    题目中 “...chlorine gas of mass equal to 8g of oxygen gas...” 意指两种气体的**摩尔数**相等。\n    因此, $n(Cl_{2}) = n(O_{2}) = 0.25$ mol\n\n3.  **计算氯分子的数量:**\n    氯分子数 = $n(Cl_{2}) \\times N_A = 0.25 mol \\times 6 \\times 10^{23} molecules/mol = 1.5 \\times 10^{23}$ molecules\n\n4.  **计算氯原子的数量:**\n    每个 $Cl_{2}$ 分子包含2个氯原子。\n    氯原子数 = 氯分子数 $\\times 2 = 1.5 \\times 10^{23} \\times 2 = 3 \\times 10^{23}$ atoms\n\n**答案是 $3 \\times 10^{23}$。**"
  },
  {
    question: "What is the volume of 12g of methane gas ($CH_{4}$) in STP? (JAR: C=12 H=1, 1 mole of gas occupies $22.4 dm^{3}$ at STP)<br/><br/>Berapakah isipadu 12g metana, $CH_{4}$ pada STP?",
    options: ["$11.2 dm^{3}$", "$16.8 dm^{3}$", "$22.4 dm^{3}$", "$33.6 dm^{3}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算甲烷 ($CH_{4}$) 的摩尔质量:**\n    Molar Mass of $CH_{4} = 12 + (1 \\times 4) = 16$ g/mol\n\n2.  **计算12g甲烷的摩尔数:**\n    摩尔数 (n) = $\\frac{\\text{质量 (m)}}{\\text{摩尔质量 (M)}} = \\frac{12 g}{16 g/mol} = 0.75$ mol\n\n3.  **计算在STP下的体积:**\n    在STP条件下, 1摩尔气体占 $22.4 dm^{3}$。\n    体积 = 摩尔数 $\\times$ 摩尔体积\n    Volume = $0.75 mol \\times 22.4 dm^{3}/mol = 16.8 dm^{3}$\n\n    **答案是 $16.8 dm^{3}$。**"
  },
  {
    question: "What is the number of atoms present in 0.05mol of sulfur dioxide gas, $SO_{2}$? (Avogadro's constant, $6 \\times 10^{23}$)<br/><br/>Berapakah bilangan atom yang terdapat dalam 0.05mol gas sulfur dioksida, $SO_{2}$?",
    options: ["$3 \\times 10^{22}$", "$6 \\times 10^{22}$", "$9 \\times 10^{22}$", "$1.2 \\times 10^{23}$"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **计算 $SO_{2}$ 分子的数量:**\n    分子数 = 摩尔数 $\\times$ 阿伏伽德罗常数\n    Number of molecules = $0.05 mol \\times 6 \\times 10^{23} molecules/mol = 3 \\times 10^{22}$ molecules\n\n2.  **计算总原子数:**\n    每个 $SO_{2}$ 分子包含 1 个硫原子 (S) 和 2 个氧原子 (O)，共 3 个原子。\n    总原子数 = 分子数 $\\times$ 每个分子的原子数\n    Total atoms = $(3 \\times 10^{22}) \\times 3 = 9 \\times 10^{22}$ atoms\n\n    **答案是 $9 \\times 10^{22}$。**"
  },
  {
    question: "The molar mass of the compound $K_{3}M(CN)_{6}$ is 329. Calculate the relative atomic mass of the element M. (JAR: K=39 C=12 N=14)<br/><br/>Jisim molar bagi sebatian $K_{3}M(CN)_{6}$ ialah 329. Kira jisim atom relative bagi unsur M?",
    options: ["52", "55", "56", "59"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **写出总摩尔质量的表达式:**\n    总摩尔质量 = $3 \\times (K) + 1 \\times (M) + 6 \\times (C) + 6 \\times (N)$\n\n2.  **代入已知值:**\n    $329 = 3 \\times (39) + M + 6 \\times (12) + 6 \\times (14)$\n\n3.  **计算各部分的值:**\n    $3 \\times 39 = 117$\n    $6 \\times 12 = 72$\n    $6 \\times 14 = 84$\n\n4.  **求解 M 的原子质量:**\n    $329 = 117 + M + 72 + 84$\n    $329 = 273 + M$\n    $M = 329 - 273$\n    $M = 56$\n\n    **答案是 56。**"
  },
  {
    question: "Calculate the mass of oxygen gas, $O_{2}$ which has a volume of $120 cm^{3}$ at room condition. (JAR: O=16, 1 mole of gas occupies $24 dm^{3}$ at room condition)<br/><br/>Kira jisim gas oksigen, $O_{2}$ yang berisipadu $120 cm^{3}$ pada keadaan bilik.",
    options: ["0.08 g", "0.12 g", "0.16 g", "0.24 g"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **统一单位:**\n    将体积从 $cm^{3}$ 转换为 $dm^{3}$。\n    $1 dm^{3} = 1000 cm^{3}$\n    $120 cm^{3} = \\frac{120}{1000} = 0.12 dm^{3}$\n\n2.  **计算气体摩尔数:**\n    在室温条件下, 1摩尔气体占 $24 dm^{3}$。\n    摩尔数 (n) = $\\frac{\\text{体积}}{\\text{摩尔体积}} = \\frac{0.12 dm^{3}}{24 dm^{3}/mol} = 0.005$ mol\n\n3.  **计算氧气 ($O_{2}$) 的摩尔质量:**\n    Molar Mass of $O_{2} = 16 \\times 2 = 32$ g/mol\n\n4.  **计算质量:**\n    质量 (m) = 摩尔数 (n) $\\times$ 摩尔质量 (M)\n    Mass = $0.005 mol \\times 32 g/mol = 0.16$ g\n\n    **答案是 0.16 g。**"
  },
  {
    question: "6.4g of element R combines with 4.14g of element Q to form a compound with its empirical formula $QR_{2}$. Calculate the relative atomic mass of R. (JAR: Q=207)<br/><br/>6.4g unsur R bergabung dengan 4.14g unsur Q membentuk sebatian dengan formula empiriknya $QR_{2}$. Kirakan jisim atom relative bagi R.",
    options: ["16", "32", "64", "160"],
    answer: 3,
    explanation: "#### 中文解题步骤:\n1.  **计算 Q 的摩尔数:**\n    摩尔数 (n) = $\\frac{\\text{质量}}{\\text{相对原子质量}} = \\frac{4.14 g}{207} = 0.02$ mol\n\n2.  **根据实验式确定 R 的摩尔数:**\n    实验式 $QR_{2}$ 表示 1 摩尔的 Q 与 2 摩尔的 R 反应。\n    所以，R 的摩尔数是 Q 的两倍。\n    Moles of R = $2 \\times$ Moles of Q = $2 \\times 0.02 = 0.04$ mol\n\n3.  **计算 R 的相对原子质量:**\n    相对原子质量 = $\\frac{\\text{质量}}{\\text{摩尔数}} = \\frac{6.4 g}{0.04 mol} = 160$\n\n    **答案是 160。**"
  },
  {
    question: "X g of metal M combines with 9.6g of oxygen to form an oxide of metal M with its empirical formula $M_{2}O_{3}$. Determine the value of x? (JAR: M=52 O=16)<br/><br/>X g logam M berpadu dengan 9.6g oksigen untuk membentuk suatu oksida logam M dengan formula empiriknya $M_{2}O_{3}$. Tentukan nilai x?",
    options: ["10.4 g", "20.8 g", "31.2 g", "5.2 g"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算氧原子的摩尔数:**\n    摩尔数 (n) = $\\frac{\\text{质量}}{\\text{相对原子质量}} = \\frac{9.6 g}{16} = 0.6$ mol\n\n2.  **根据实验式确定 M 的摩尔数:**\n    实验式 $M_{2}O_{3}$ 表示 2 摩尔的 M 与 3 摩尔的 O 反应。\n    摩尔比 M : O = 2 : 3\n    $\\frac{\\text{Moles of M}}{\\text{Moles of O}} = \\frac{2}{3}$\n    Moles of M = $\\frac{2}{3} \\times$ Moles of O = $\\frac{2}{3} \\times 0.6 = 0.4$ mol\n\n3.  **计算 M 的质量 (x):**\n    质量 (x) = 摩尔数 $\\times$ 相对原子质量\n    x = $0.4 mol \\times 52 = 20.8$ g\n\n    **答案是 20.8 g。**"
  },
  {
    question: "Calculate the volume of carbon dioxide gas liberated at room condition when 7.5g of zinc carbonate powder is heated. (JAR: Zn=65 C=12 O=16 ; 1 mole of gas = $24 dm^{3}$ at room condition)<br/><br/>Kira isipadu gas karbon dioksida yang terbebas pada keadaan bilik apabila 7.5g serbuk zink karbonat dipanaskan.",
    options: ["$1.20 dm^{3}$", "$1.44 dm^{3}$", "$1.80 dm^{3}$", "$2.40 dm^{3}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **写出化学方程式:**\n    $ZnCO_{3}(s) \\rightarrow ZnO(s) + CO_{2}(g)$\n\n2.  **计算碳酸锌 ($ZnCO_{3}$) 的摩尔质量:**\n    Molar Mass of $ZnCO_{3} = 65 + 12 + (3 \\times 16) = 65 + 12 + 48 = 125$ g/mol\n\n3.  **计算7.5g碳酸锌的摩尔数:**\n    Moles of $ZnCO_{3} = \\frac{7.5 g}{125 g/mol} = 0.06$ mol\n\n4.  **根据方程式确定 $CO_{2}$ 的摩尔数:**\n    从方程式可以看出，$ZnCO_{3}$ 和 $CO_{2}$ 的摩尔比是 1:1。\n    Moles of $CO_{2}$ = Moles of $ZnCO_{3} = 0.06$ mol\n\n5.  **计算 $CO_{2}$ 在室温下的体积:**\n    Volume of $CO_{2} = 0.06 mol \\times 24 dm^{3}/mol = 1.44 dm^{3}$\n\n    **答案是 $1.44 dm^{3}$。**"
  },
  {
    question: "Calculate the minimum volume of oxygen gas required at STP to burn a complete 2.3g of ethanol, $C_{2}H_{5}OH$. (JAR: H=1 C=12 O=16 ; 1mole of gas = $22.4 dm^{3}$ at STP)<br/><br/>Kira isipadu minimum gas oksigen yang diperlukan pada STP untuk membakar lengkap 2.3g ethanol, $C_{2}H_{5}OH$.",
    options: ["$1.12 dm^{3}$", "$2.24 dm^{3}$", "$3.36 dm^{3}$", "$6.72 dm^{3}$"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **写出并配平化学方程式:**\n    $C_{2}H_{5}OH + 3O_{2} \\rightarrow 2CO_{2} + 3H_{2}O$\n\n2.  **计算乙醇 ($C_{2}H_{5}OH$) 的摩尔质量:**\n    Molar Mass of $C_{2}H_{5}OH = (2 \\times 12) + (6 \\times 1) + 16 = 24 + 6 + 16 = 46$ g/mol\n\n3.  **计算2.3g乙醇的摩尔数:**\n    Moles of $C_{2}H_{5}OH = \\frac{2.3 g}{46 g/mol} = 0.05$ mol\n\n4.  **根据方程式确定所需 $O_{2}$ 的摩尔数:**\n    从方程式可以看出，$C_{2}H_{5}OH$ 和 $O_{2}$ 的摩尔比是 1:3。\n    Moles of $O_{2} = 3 \\times$ Moles of $C_{2}H_{5}OH = 3 \\times 0.05 = 0.15$ mol\n\n5.  **计算 $O_{2}$ 在STP下的体积:**\n    Volume of $O_{2} = 0.15 mol \\times 22.4 dm^{3}/mol = 3.36 dm^{3}$\n\n    **答案是 $3.36 dm^{3}$。**"
  },
   {
    question: "A syringe contains $120 cm^{3}$ ammonia gas, $NH_{3}$ at room condition. What is the number of ammonia molecules in this syringe? (Avogadro's constant, $6 \\times 10^{23}$ ; 1 mole of gas occupies $24 dm^{3}$ at room condition)<br/><br/>Suatu picagari mengandungi $120 cm^{3}$ gas ammonia, $NH_{3}$ pada keadaan bilik. Berapakah bilangan molekul ammonia dalam picagari ini?",
    options: ["$3 \\times 10^{20}$", "$3 \\times 10^{21}$", "$6 \\times 10^{21}$", "$6 \\times 10^{22}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **统一单位:**\n    将体积从 $cm^{3}$ 转换为 $dm^{3}$。\n    $120 cm^{3} = \\frac{120}{1000} = 0.12 dm^{3}$\n\n2.  **计算气体摩尔数:**\n    在室温条件下, 1摩尔气体占 $24 dm^{3}$。\n    摩尔数 (n) = $\\frac{\\text{体积}}{\\text{摩尔体积}} = \\frac{0.12 dm^{3}}{24 dm^{3}/mol} = 0.005$ mol\n\n3.  **计算分子数量:**\n    分子数 = 摩尔数 $\\times$ 阿伏伽德罗常数\n    Number of molecules = $0.005 mol \\times 6 \\times 10^{23} molecules/mol$\n    $= 0.03 \\times 10^{23} = 3 \\times 10^{21}$ molecules\n\n    **答案是 $3 \\times 10^{21}$。**"
  },
  {
    question: "What is the volume of nitrogen gas, $N_{2}$ in $cm^{3}$ in STP which consists of $2.4 \\times 10^{23}$ molecules of nitrogen? (Avogadro's constant, $6 \\times 10^{23}$ ; 1 mole of gas occupies $22.4 dm^{3}$ at STP)<br/><br/>Berapakah isipadu gas nitrogen, $N_{2}$ dalam $cm^{3}$ pada STP yang terdiri daripada $2.4 \\times 10^{23}$ molekul nitrogen?",
    options: ["$4480 cm^{3}$", "$8960 cm^{3}$", "$2240 cm^{3}$", "$11200 cm^{3}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算氮气 ($N_{2}$) 的摩尔数:**\n    摩尔数 (n) = $\\frac{\\text{分子数}}{\\text{阿伏伽德罗常数}} = \\frac{2.4 \\times 10^{23}}{6 \\times 10^{23}} = 0.4$ mol\n\n2.  **计算在STP下的体积 ($dm^{3}$):**\n    在STP条件下, 1摩尔气体占 $22.4 dm^{3}$。\n    体积 ($dm^{3}$) = 摩尔数 $\\times$ 摩尔体积\n    Volume = $0.4 mol \\times 22.4 dm^{3}/mol = 8.96 dm^{3}$\n\n3.  **将体积转换为 $cm^{3}$:**\n    $1 dm^{3} = 1000 cm^{3}$\n    Volume ($cm^{3}$) = $8.96 dm^{3} \\times 1000 cm^{3}/dm^{3} = 8960 cm^{3}$\n\n    **答案是 $8960 cm^{3}$。**"
  },
  {
    question: "How many moles of atoms are there in 9g of aluminium? (JAR: Al=27)<br/><br/>Berapakah bilangan mol atom yang terdapat dalam 9g aluminium?",
    options: ["0.33 mol", "0.50 mol", "1.00 mol", "3.00 mol"],
    answer: 0,
    explanation: "#### 中文解题步骤:\n1.  **确定铝的摩尔质量:**\n    铝 (Al) 的摩尔质量是 27 g/mol。\n\n2.  **计算摩尔数:**\n    摩尔数 (n) = $\\frac{\\text{质量 (m)}}{\\text{摩尔质量 (M)}} = \\frac{9 g}{27 g/mol} = 0.333...$ mol\n\n    **答案是 0.33 mol。**"
  },
  {
    question: "What is the mass of 0.25 moles of copper(II) sulfate, $CuSO_{4}$? (JAR: Cu=64, S=32, O=16)<br/><br/>Apakah jisim bagi 0.25 mol kuprum(II) sulfat, $CuSO_{4}$?",
    options: ["20 g", "40 g", "80 g", "160 g"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算 $CuSO_{4}$ 的摩尔质量:**\n    Molar Mass of $CuSO_{4} = 64 + 32 + (4 \\times 16) = 64 + 32 + 64 = 160$ g/mol\n\n2.  **计算质量:**\n    质量 = 摩尔数 $\\times$ 摩尔质量\n    Mass = $0.25 mol \\times 160 g/mol = 40$ g\n\n    **答案是 40 g。**"
  },
  {
    question: "How many oxygen atoms are in 18g of water, $H_{2}O$? (JAR: H=1, O=16; Avogadro's constant, $6 \\times 10^{23}$)<br/><br/>Berapakah bilangan atom oksigen dalam 18g air, $H_{2}O$?",
    options: ["$6 \\times 10^{23}$", "$1.2 \\times 10^{24}$", "$1.8 \\times 10^{24}$", "$3 \\times 10^{23}$"],
    answer: 0,
    explanation: "#### 中文解题步骤:\n1.  **计算水的摩尔质量:**\n    Molar Mass of $H_{2}O = (2 \\times 1) + 16 = 18$ g/mol\n\n2.  **计算18g水的摩尔数:**\n    Moles of $H_{2}O = \\frac{18 g}{18 g/mol} = 1$ mol\n\n3.  **计算水分子的数量:**\n    Number of molecules = $1 mol \\times 6 \\times 10^{23} molecules/mol = 6 \\times 10^{23}$ molecules\n\n4.  **计算氧原子的数量:**\n    每个 $H_{2}O$ 分子含有 1 个氧原子。\n    Number of oxygen atoms = $6 \\times 10^{23} \\times 1 = 6 \\times 10^{23}$ atoms\n\n    **答案是 $6 \\times 10^{23}$。**"
  },
  {
    question: "What is the volume occupied by 11g of carbon dioxide gas, $CO_{2}$, at STP? (JAR: C=12, O=16; 1 mole of gas occupies $22.4 dm^{3}$ at STP)<br/><br/>Apakah isipadu yang dipenuhi oleh 11g gas karbon dioksida, $CO_{2}$, pada STP?",
    options: ["$5.6 dm^{3}$", "$11.2 dm^{3}$", "$22.4 dm^{3}$", "$44.8 dm^{3}$"],
    answer: 0,
    explanation: "#### 中文解题步骤:\n1.  **计算 $CO_{2}$ 的摩尔质量:**\n    Molar Mass of $CO_{2} = 12 + (2 \\times 16) = 44$ g/mol\n\n2.  **计算11g $CO_{2}$ 的摩尔数:**\n    Moles of $CO_{2} = \\frac{11 g}{44 g/mol} = 0.25$ mol\n\n3.  **计算在STP下的体积:**\n    Volume = $0.25 mol \\times 22.4 dm^{3}/mol = 5.6 dm^{3}$\n\n    **答案是 $5.6 dm^{3}$。**"
  },
  {
    question: "A compound has an empirical formula of $CH_{2}O$ and a molar mass of 180 g/mol. What is its molecular formula? (JAR: C=12, H=1, O=16)<br/><br/>Suatu sebatian mempunyai formula empirik $CH_{2}O$ dan jisim molar 180 g/mol. Apakah formula molekulnya?",
    options: ["$C_{3}H_{6}O_{3}$", "$C_{6}H_{12}O_{6}$", "$C_{5}H_{10}O_{5}$", "$C_{7}H_{14}O_{7}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算实验式的摩尔质量:**\n    Molar Mass of $CH_{2}O = 12 + (2 \\times 1) + 16 = 30$ g/mol\n\n2.  **计算 n 的值 (分子式与实验式的倍数关系):**\n    $n = \\frac{\\text{分子摩尔质量}}{\\text{实验式摩尔质量}} = \\frac{180 g/mol}{30 g/mol} = 6$\n\n3.  **确定分子式:**\n    Molecular Formula = (Empirical Formula)$_{n}$ = $(CH_{2}O)_{6} = C_{6}H_{12}O_{6}$\n\n    **答案是 $C_{6}H_{12}O_{6}$。**"
  },
  {
    question: "The reaction between magnesium and hydrochloric acid is: $Mg(s) + 2HCl(aq) \\rightarrow MgCl_{2}(aq) + H_{2}(g)$. What mass of magnesium is needed to produce 2.4 $dm^{3}$ of hydrogen gas at room conditions? (JAR: Mg=24; 1 mole of gas occupies $24 dm^{3}$ at room condition)<br/><br/>Tindak balas antara magnesium dan asid hidroklorik ialah: $Mg(s) + 2HCl(aq) \\rightarrow MgCl_{2}(aq) + H_{2}(g)$. Berapakah jisim magnesium yang diperlukan untuk menghasilkan 2.4 $dm^{3}$ gas hidrogen pada keadaan bilik?",
    options: ["1.2 g", "2.4 g", "3.6 g", "4.8 g"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算氢气 ($H_{2}$) 的摩尔数:**\n    Moles of $H_{2} = \\frac{\\text{Volume}}{\\text{Molar Volume}} = \\frac{2.4 dm^{3}}{24 dm^{3}/mol} = 0.1$ mol\n\n2.  **根据方程式确定镁 (Mg) 的摩尔数:**\n    从方程式可以看出, Mg 和 $H_{2}$ 的摩尔比是 1:1。\n    Moles of Mg = Moles of $H_{2} = 0.1$ mol\n\n3.  **计算镁的质量:**\n    Mass of Mg = Moles of Mg $\\times$ Molar Mass of Mg\n    Mass = $0.1 mol \\times 24 g/mol = 2.4$ g\n\n    **答案是 2.4 g。**"
  },
  {
    question: "How many moles are in $4.5 \\times 10^{24}$ atoms of helium? (Avogadro's constant, $6 \\times 10^{23}$)<br/><br/>Berapakah bilangan mol dalam $4.5 \\times 10^{24}$ atom helium?",
    options: ["0.75 mol", "1.33 mol", "7.5 mol", "13.3 mol"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **计算摩尔数:**\n    摩尔数 = $\\frac{\\text{原子数}}{\\text{阿伏伽德罗常数}}$\n    $n = \\frac{4.5 \\times 10^{24}}{6 \\times 10^{23}} = \\frac{45 \\times 10^{23}}{6 \\times 10^{23}} = 7.5$ mol\n\n    **答案是 7.5 mol。**"
  },
  {
    question: "What is the concentration of a solution containing 5.85g of NaCl in $500 cm^{3}$ of water? (JAR: Na=23, Cl=35.5)<br/><br/>Apakah kepekatan larutan yang mengandungi 5.85g NaCl dalam $500 cm^{3}$ air?",
    options: ["$0.1 mol/dm^{3}$", "$0.2 mol/dm^{3}$", "$0.5 mol/dm^{3}$", "$1.0 mol/dm^{3}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算 NaCl 的摩尔质量:**\n    Molar Mass of NaCl = $23 + 35.5 = 58.5$ g/mol\n\n2.  **计算 NaCl 的摩尔数:**\n    Moles of NaCl = $\\frac{5.85 g}{58.5 g/mol} = 0.1$ mol\n\n3.  **转换体积单位:**\n    Volume = $500 cm^{3} = \\frac{500}{1000} = 0.5 dm^{3}$\n\n4.  **计算浓度:**\n    Concentration (Molarity) = $\\frac{\\text{Moles}}{\\text{Volume in } dm^{3}} = \\frac{0.1 mol}{0.5 dm^{3}} = 0.2$ mol/dm³\n\n    **答案是 $0.2 mol/dm^{3}$。**"
  },
  {
    question: "A hydrocarbon contains 85.7% carbon by mass. Its molar mass is 56 g/mol. Determine its molecular formula. (JAR: C=12, H=1)<br/><br/>Suatu hidrokarbon mengandungi 85.7% karbon mengikut jisim. Jisim molarnya ialah 56 g/mol. Tentukan formula molekulnya.",
    options: ["$C_{2}H_{4}$", "$C_{3}H_{6}$", "$C_{4}H_{8}$", "$C_{5}H_{10}$"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **计算各元素的摩尔比 (确定实验式):**\n    假设有 100g 化合物, 则含有 85.7g C 和 14.3g H。\n    Moles of C = $\\frac{85.7 g}{12 g/mol} = 7.14$ mol\n    Moles of H = $\\frac{14.3 g}{1 g/mol} = 14.3$ mol\n    Ratio C:H = $\\frac{7.14}{7.14} : \\frac{14.3}{7.14} \\approx 1:2$. 实验式是 $CH_{2}$。\n\n2.  **计算实验式的摩尔质量:**\n    Molar Mass of $CH_{2} = 12 + (2 \\times 1) = 14$ g/mol\n\n3.  **计算 n 的值:**\n    $n = \\frac{\\text{分子摩尔质量}}{\\text{实验式摩尔质量}} = \\frac{56 g/mol}{14 g/mol} = 4$\n\n4.  **确定分子式:**\n    Molecular Formula = $(CH_{2})_{4} = C_{4}H_{8}$\n\n    **答案是 $C_{4}H_{8}$。**"
  },
  {
    question: "In the Haber process, $N_{2}(g) + 3H_{2}(g) \\rightarrow 2NH_{3}(g)$. If 56g of nitrogen reacts, what volume of ammonia ($NH_{3}$) is produced at STP? (JAR: N=14; 1 mole of gas occupies $22.4 dm^{3}$ at STP)<br/><br/>Dalam proses Haber, $N_{2}(g) + 3H_{2}(g) \\rightarrow 2NH_{3}(g)$. Jika 56g nitrogen bertindak balas, apakah isipadu ammonia ($NH_{3}$) yang terhasil pada STP?",
    options: ["$22.4 dm^{3}$", "$44.8 dm^{3}$", "$67.2 dm^{3}$", "$89.6 dm^{3}$"],
    answer: 3,
    explanation: "#### 中文解题步骤:\n1.  **计算氮气 ($N_{2}$) 的摩尔数:**\n    Molar Mass of $N_{2} = 2 \\times 14 = 28$ g/mol\n    Moles of $N_{2} = \\frac{56 g}{28 g/mol} = 2$ mol\n\n2.  **根据方程式确定氨气 ($NH_{3}$) 的摩尔数:**\n    从方程式可以看出, $N_{2}$ 和 $NH_{3}$ 的摩尔比是 1:2。\n    Moles of $NH_{3} = 2 \\times$ Moles of $N_{2} = 2 \\times 2 = 4$ mol\n\n3.  **计算氨气在STP下的体积:**\n    Volume of $NH_{3} = 4 mol \\times 22.4 dm^{3}/mol = 89.6 dm^{3}$\n\n    **答案是 $89.6 dm^{3}$。**"
  },
   {
    question: "What is the molar mass of glucose, $C_{6}H_{12}O_{6}$? (JAR: C=12, H=1, O=16)<br/><br/>Apakah jisim molar bagi glukosa, $C_{6}H_{12}O_{6}$?",
    options: ["90 g/mol", "120 g/mol", "150 g/mol", "180 g/mol"],
    answer: 3,
    explanation: "#### 中文解题步骤:\n1.  **计算各元素总质量:**\n    C: $6 \\times 12 = 72$\n    H: $12 \\times 1 = 12$\n    O: $6 \\times 16 = 96$\n\n2.  **加总得到摩尔质量:**\n    Molar Mass = $72 + 12 + 96 = 180$ g/mol\n\n    **答案是 180 g/mol。**"
  },
  {
    question: "How many grams of calcium are in 2.5 moles of calcium? (JAR: Ca=40)<br/><br/>Berapakah gram kalsium dalam 2.5 mol kalsium?",
    options: ["25 g", "50 g", "75 g", "100 g"],
    answer: 3,
    explanation: "#### 中文解题步骤:\n1.  **计算质量:**\n    质量 = 摩尔数 $\\times$ 摩尔质量\n    Mass = $2.5 mol \\times 40 g/mol = 100$ g\n\n    **答案是 100 g。**"
  },
  {
    question: "Calculate the number of molecules in 90g of water, $H_{2}O$. (JAR: H=1, O=16; Avogadro's constant, $6 \\times 10^{23}$)<br/><br/>Kira bilangan molekul dalam 90g air, $H_{2}O$.",
    options: ["$1.5 \\times 10^{24}$", "$3.0 \\times 10^{24}$", "$4.5 \\times 10^{24}$", "$6.0 \\times 10^{24}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算水的摩尔质量:**\n    Molar Mass of $H_{2}O = (2 \\times 1) + 16 = 18$ g/mol\n\n2.  **计算90g水的摩尔数:**\n    Moles = $\\frac{90 g}{18 g/mol} = 5$ mol\n\n3.  **计算分子数量:**\n    Number of molecules = $5 mol \\times 6 \\times 10^{23} molecules/mol = 30 \\times 10^{23} = 3.0 \\times 10^{24}$ molecules\n\n    **答案是 $3.0 \\times 10^{24}$。**"
  },
  {
    question: "What volume of oxygen gas ($O_{2}$) at room condition is required to completely react with 12g of carbon? (Equation: $C + O_{2} \\rightarrow CO_{2}$; JAR: C=12; 1 mole of gas occupies $24 dm^{3}$ at room condition)<br/><br/>Apakah isipadu gas oksigen ($O_{2}$) pada keadaan bilik yang diperlukan untuk bertindak balas lengkap dengan 12g karbon?",
    options: ["$12 dm^{3}$", "$24 dm^{3}$", "$36 dm^{3}$", "$48 dm^{3}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算碳的摩尔数:**\n    Moles of C = $\\frac{12 g}{12 g/mol} = 1$ mol\n\n2.  **根据方程式确定氧气的摩尔数:**\n    从方程式可以看出, C 和 $O_{2}$ 的摩尔比是 1:1。\n    Moles of $O_{2}$ = Moles of C = 1 mol\n\n3.  **计算氧气在室温下的体积:**\n    Volume of $O_{2} = 1 mol \\times 24 dm^{3}/mol = 24 dm^{3}$\n\n    **答案是 $24 dm^{3}$。**"
  },
  {
    question: "A sample of gas has a volume of $4.8 dm^{3}$ at room temperature. How many moles of gas are in the sample? (1 mole of gas occupies $24 dm^{3}$ at room condition)<br/><br/>Suatu sampel gas mempunyai isipadu $4.8 dm^{3}$ pada suhu bilik. Berapakah bilangan mol gas dalam sampel itu?",
    options: ["0.1 mol", "0.2 mol", "0.5 mol", "2.0 mol"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算摩尔数:**\n    摩尔数 = $\\frac{\\text{体积}}{\\text{摩尔体积}} = \\frac{4.8 dm^{3}}{24 dm^{3}/mol} = 0.2$ mol\n\n    **答案是 0.2 mol。**"
  },
  {
    question: "An oxide of iron contains 70% iron by mass. What is its empirical formula? (JAR: Fe=56, O=16)<br/><br/>Suatu oksida ferum mengandungi 70% ferum mengikut jisim. Apakah formula empiriknya?",
    options: ["FeO", "$Fe_{2}O_{3}$", "$Fe_{3}O_{4}$", "$FeO_{2}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算各元素的摩尔比:**\n    假设有 100g 化合物, 则含有 70g Fe 和 30g O。\n    Moles of Fe = $\\frac{70 g}{56 g/mol} = 1.25$ mol\n    Moles of O = $\\frac{30 g}{16 g/mol} = 1.875$ mol\n\n2.  **找到最简整数比:**\n    Ratio Fe:O = $\\frac{1.25}{1.25} : \\frac{1.875}{1.25} = 1 : 1.5$\n    将比例乘以 2 得到整数比: $2 : 3$\n    实验式是 $Fe_{2}O_{3}$\n\n    **答案是 $Fe_{2}O_{3}$。**"
  },
  {
    question: "What mass of sodium hydroxide ($NaOH$) is needed to prepare $250 cm^{3}$ of a $0.5 mol/dm^{3}$ solution? (JAR: Na=23, O=16, H=1)<br/><br/>Apakah jisim natrium hidroksida ($NaOH$) yang diperlukan untuk menyediakan $250 cm^{3}$ larutan $0.5 mol/dm^{3}$?",
    options: ["2 g", "5 g", "10 g", "20 g"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **转换体积单位:**\n    Volume = $250 cm^{3} = 0.25 dm^{3}$\n\n2.  **计算所需的 NaOH 摩尔数:**\n    Moles = Molarity $\\times$ Volume = $0.5 mol/dm^{3} \\times 0.25 dm^{3} = 0.125$ mol\n\n3.  **计算 NaOH 的摩尔质量:**\n    Molar Mass of NaOH = $23 + 16 + 1 = 40$ g/mol\n\n4.  **计算质量:**\n    Mass = $0.125 mol \\times 40 g/mol = 5$ g\n\n    **答案是 5 g。**"
  },
  {
    question: "The decomposition of hydrogen peroxide is: $2H_{2}O_{2}(aq) \\rightarrow 2H_{2}O(l) + O_{2}(g)$. How many moles of $O_{2}$ are produced from 3.4g of $H_{2}O_{2}$? (JAR: H=1, O=16)<br/><br/>Penguraian hidrogen peroksida ialah: $2H_{2}O_{2}(aq) \\rightarrow 2H_{2}O(l) + O_{2}(g)$. Berapakah mol $O_{2}$ yang terhasil daripada 3.4g $H_{2}O_{2}$?",
    options: ["0.05 mol", "0.10 mol", "0.15 mol", "0.20 mol"],
    answer: 0,
    explanation: "#### 中文解题步骤:\n1.  **计算 $H_{2}O_{2}$ 的摩尔质量:**\n    Molar Mass of $H_{2}O_{2} = (2 \\times 1) + (2 \\times 16) = 34$ g/mol\n\n2.  **计算 $H_{2}O_{2}$ 的摩尔数:**\n    Moles of $H_{2}O_{2} = \\frac{3.4 g}{34 g/mol} = 0.1$ mol\n\n3.  **根据方程式确定 $O_{2}$ 的摩尔数:**\n    从方程式可以看出, $H_{2}O_{2}$ 和 $O_{2}$ 的摩尔比是 2:1。\n    Moles of $O_{2} = \\frac{1}{2} \\times$ Moles of $H_{2}O_{2} = \\frac{1}{2} \\times 0.1 = 0.05$ mol\n\n    **答案是 0.05 mol。**"
  },
  {
    question: "How many hydrogen atoms are in 3 moles of ammonia, $NH_{3}$? (Avogadro's constant, $6 \\times 10^{23}$)<br/><br/>Berapakah bilangan atom hidrogen dalam 3 mol ammonia, $NH_{3}$?",
    options: ["$1.8 \\times 10^{24}$", "$3.6 \\times 10^{24}$", "$5.4 \\times 10^{24}$", "$7.2 \\times 10^{24}$"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **计算 $NH_{3}$ 分子的数量:**\n    Number of molecules = $3 mol \\times 6 \\times 10^{23} molecules/mol = 1.8 \\times 10^{24}$ molecules\n\n2.  **计算氢原子的数量:**\n    每个 $NH_{3}$ 分子含有 3 个氢原子。\n    Number of H atoms = $(1.8 \\times 10^{24}) \\times 3 = 5.4 \\times 10^{24}$ atoms\n\n    **答案是 $5.4 \\times 10^{24}$。**"
  },
  {
    question: "If 1.2g of carbon is burnt in excess oxygen, what is the mass of carbon dioxide produced? (Equation: $C + O_{2} \\rightarrow CO_{2}$; JAR: C=12, O=16)<br/><br/>Jika 1.2g karbon dibakar dalam oksigen berlebihan, apakah jisim karbon dioksida yang terhasil?",
    options: ["1.2 g", "2.2 g", "3.6 g", "4.4 g"],
    answer: 3,
    explanation: "#### 中文解题步骤:\n1.  **计算碳的摩尔数:**\n    Moles of C = $\\frac{1.2 g}{12 g/mol} = 0.1$ mol\n\n2.  **根据方程式确定 $CO_{2}$ 的摩尔数:**\n    从方程式可以看出, C 和 $CO_{2}$ 的摩尔比是 1:1。\n    Moles of $CO_{2}$ = 0.1 mol\n\n3.  **计算 $CO_{2}$ 的摩尔质量:**\n    Molar Mass of $CO_{2} = 12 + (2 \\times 16) = 44$ g/mol\n\n4.  **计算 $CO_{2}$ 的质量:**\n    Mass of $CO_{2} = 0.1 mol \\times 44 g/mol = 4.4$ g\n\n    **答案是 4.4 g。**"
  },
  {
    question: "What is the mass of one molecule of ethane, $C_{2}H_{6}$? (JAR: C=12, H=1; Avogadro's constant, $6 \\times 10^{23}$)<br/><br/>Apakah jisim satu molekul etana, $C_{2}H_{6}$?",
    options: ["$5 \\times 10^{-23}$ g", "$6 \\times 10^{-23}$ g", "$30$ g", "$30 \\times 10^{23}$ g"],
    answer: 0,
    explanation: "#### 中文解题步骤:\n1.  **计算 $C_{2}H_{6}$ 的摩尔质量:**\n    Molar Mass = $(2 \\times 12) + (6 \\times 1) = 30$ g/mol. 这是 1 摩尔分子的质量。\n\n2.  **计算一个分子的质量:**\n    1 摩尔含有 $6 \\times 10^{23}$ 个分子。\n    Mass of one molecule = $\\frac{\\text{Molar Mass}}{N_A} = \\frac{30 g}{6 \\times 10^{23}} = 5 \\times 10^{-23}$ g\n\n    **答案是 $5 \\times 10^{-23}$ g。**"
  },
  {
    question: "Calculate the percentage composition by mass of oxygen in sulfuric acid, $H_{2}SO_{4}$. (JAR: H=1, S=32, O=16)<br/><br/>Kira peratus komposisi jisim oksigen dalam asid sulfurik, $H_{2}SO_{4}$.",
    options: ["16.3%", "32.7%", "49.0%", "65.3%"],
    answer: 3,
    explanation: "#### 中文解题步骤:\n1.  **计算 $H_{2}SO_{4}$ 的摩尔质量:**\n    Molar Mass = $(2 \\times 1) + 32 + (4 \\times 16) = 2 + 32 + 64 = 98$ g/mol\n\n2.  **计算分子中氧的总质量:**\n    Total mass of Oxygen = $4 \\times 16 = 64$ g\n\n3.  **计算氧的质量百分比:**\n    Percentage of O = $\\frac{\\text{Total mass of O}}{\\text{Molar Mass of } H_{2}SO_{4}} \\times 100\\% = \\frac{64}{98} \\times 100\\% \\approx 65.3\\%$\n\n    **答案是 65.3%。**"
  },
  {
    question: "2.3g of sodium reacts completely with chlorine. What is the mass of sodium chloride ($NaCl$) formed? (Equation: $2Na + Cl_{2} \\rightarrow 2NaCl$; JAR: Na=23, Cl=35.5)<br/><br/>2.3g natrium bertindak balas lengkap dengan klorin. Apakah jisim natrium klorida ($NaCl$) yang terbentuk?",
    options: ["2.93 g", "4.6 g", "5.85 g", "11.7 g"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **计算钠 (Na) 的摩尔数:**\n    Moles of Na = $\\frac{2.3 g}{23 g/mol} = 0.1$ mol\n\n2.  **根据方程式确定 NaCl 的摩尔数:**\n    从方程式可以看出, Na 和 NaCl 的摩尔比是 2:2, 即 1:1。\n    Moles of NaCl = Moles of Na = 0.1 mol\n\n3.  **计算 NaCl 的摩尔质量:**\n    Molar Mass of NaCl = $23 + 35.5 = 58.5$ g/mol\n\n4.  **计算 NaCl 的质量:**\n    Mass of NaCl = $0.1 mol \\times 58.5 g/mol = 5.85$ g\n\n    **答案是 5.85 g。**"
  },
  {
    question: "What is the total number of ions in 1 mole of magnesium chloride, $MgCl_{2}$?<br/><br/>Apakah jumlah bilangan ion dalam 1 mol magnesium klorida, $MgCl_{2}$?",
    options: ["$6 \\times 10^{23}$", "$1.2 \\times 10^{24}$", "$1.8 \\times 10^{24}$", "$2.4 \\times 10^{24}$"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **确定离子构成:**\n    $MgCl_{2}$ 溶解时会电离成 1 个 $Mg^{2+}$ 离子和 2 个 $Cl^{-}$ 离子，总共 3 个离子。\n    $MgCl_{2} \\rightarrow Mg^{2+} + 2Cl^{-}$\n\n2.  **计算 1 摩尔 $MgCl_{2}$ 中的离子总摩尔数:**\n    Total moles of ions = $1 \\times (1+2) = 3$ mol\n\n3.  **计算离子总数:**\n    Total number of ions = Total moles of ions $\\times N_A = 3 mol \\times 6 \\times 10^{23} ions/mol = 1.8 \\times 10^{24}$ ions\n\n    **答案是 $1.8 \\times 10^{24}$。**"
  },
  {
    question: "How much volume of $0.2 mol/dm^{3}$ hydrochloric acid is needed to neutralize $20 cm^{3}$ of $0.1 mol/dm^{3}$ sodium hydroxide solution? (Equation: $HCl + NaOH \\rightarrow NaCl + H_{2}O$)<br/><br/>Berapakah isipadu asid hidroklorik $0.2 mol/dm^{3}$ yang diperlukan untuk meneutralkan $20 cm^{3}$ larutan natrium hidroksida $0.1 mol/dm^{3}$?",
    options: ["$5 cm^{3}$", "$10 cm^{3}$", "$20 cm^{3}$", "$40 cm^{3}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算 NaOH 的摩尔数:**\n    Volume of NaOH = $20 cm^{3} = 0.02 dm^{3}$\n    Moles of NaOH = $0.1 mol/dm^{3} \\times 0.02 dm^{3} = 0.002$ mol\n\n2.  **根据方程式确定 HCl 的摩尔数:**\n    从方程式可以看出, HCl 和 NaOH 的摩尔比是 1:1。\n    Moles of HCl = Moles of NaOH = 0.002 mol\n\n3.  **计算 HCl 的体积:**\n    Volume of HCl = $\\frac{\\text{Moles}}{\\text{Molarity}} = \\frac{0.002 mol}{0.2 mol/dm^{3}} = 0.01 dm^{3}$\n\n4.  **转换单位:**\n    $0.01 dm^{3} = 10 cm^{3}$\n\n    **答案是 $10 cm^{3}$。**"
  },
  {
    question: "Combustion of 1.6g of methane ($CH_{4}$) produces what mass of water ($H_{2}O$)? (Equation: $CH_{4} + 2O_{2} \\rightarrow CO_{2} + 2H_{2}O$; JAR: C=12, H=1, O=16)<br/><br/>Pembakaran 1.6g metana ($CH_{4}$) menghasilkan berapakah jisim air ($H_{2}O$)?",
    options: ["1.8 g", "3.6 g", "5.4 g", "7.2 g"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算甲烷 ($CH_{4}$) 的摩尔数:**\n    Molar Mass of $CH_{4} = 12 + 4 = 16$ g/mol\n    Moles of $CH_{4} = \\frac{1.6 g}{16 g/mol} = 0.1$ mol\n\n2.  **根据方程式确定水 ($H_{2}O$) 的摩尔数:**\n    从方程式可以看出, $CH_{4}$ 和 $H_{2}O$ 的摩尔比是 1:2。\n    Moles of $H_{2}O = 2 \\times 0.1 = 0.2$ mol\n\n3.  **计算水的摩尔质量:**\n    Molar Mass of $H_{2}O = 18$ g/mol\n\n4.  **计算水的质量:**\n    Mass of $H_{2}O = 0.2 mol \\times 18 g/mol = 3.6$ g\n\n    **答案是 3.6 g。**"
  },
  {
    question: "What is the number of moles in 3.2g of methane, $CH_{4}$? (JAR: C=12, H=1)<br/><br/>Berapakah bilangan mol dalam 3.2g metana, $CH_{4}$?",
    options: ["0.1 mol", "0.2 mol", "0.5 mol", "2.0 mol"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算甲烷的摩尔质量:**\n    Molar Mass of $CH_{4} = 12 + (4 \\times 1) = 16$ g/mol\n\n2.  **计算摩尔数:**\n    Moles = $\\frac{3.2 g}{16 g/mol} = 0.2$ mol\n\n    **答案是 0.2 mol。**"
  },
  {
    question: "A solution is made by dissolving 4.9g of sulfuric acid ($H_{2}SO_{4}$) in water to make $100 cm^{3}$ of solution. What is the concentration? (JAR: H=1, S=32, O=16)<br/><br/>Suatu larutan disediakan dengan melarutkan 4.9g asid sulfurik ($H_{2}SO_{4}$) dalam air untuk menghasilkan $100 cm^{3}$ larutan. Apakah kepekatannya?",
    options: ["$0.1 mol/dm^{3}$", "$0.25 mol/dm^{3}$", "$0.5 mol/dm^{3}$", "$1.0 mol/dm^{3}$"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **计算 $H_{2}SO_{4}$ 的摩尔质量:**\n    Molar Mass = $(2 \\times 1) + 32 + (4 \\times 16) = 98$ g/mol\n\n2.  **计算 $H_{2}SO_{4}$ 的摩尔数:**\n    Moles = $\\frac{4.9 g}{98 g/mol} = 0.05$ mol\n\n3.  **转换体积单位:**\n    Volume = $100 cm^{3} = 0.1 dm^{3}$\n\n4.  **计算浓度:**\n    Concentration = $\\frac{0.05 mol}{0.1 dm^{3}} = 0.5$ mol/dm³\n\n    **答案是 $0.5 mol/dm^{3}$。**"
  },
  {
    question: "Which of the following contains the largest number of atoms? (JAR: C=12, Ne=20, H=1, O=16)<br/><br/>Antara berikut, yang manakah mengandungi bilangan atom yang terbesar?",
    options: ["12g of Carbon", "10g of Neon", "2g of Hydrogen gas ($H_{2}$)", "8g of Oxygen gas ($O_{2}$)"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **计算各项的原子摩尔数:**\n    A) C: $\\frac{12 g}{12 g/mol} = 1$ mol atoms\n    B) Ne: $\\frac{10 g}{20 g/mol} = 0.5$ mol atoms\n    C) $H_{2}$: $\\frac{2 g}{2 g/mol} = 1$ mol molecules. Atoms = $1 \\times 2 = 2$ mol atoms\n    D) $O_{2}$: $\\frac{8 g}{32 g/mol} = 0.25$ mol molecules. Atoms = $0.25 \\times 2 = 0.5$ mol atoms\n\n2.  **比较原子摩尔数:**\n    C (2 mol) > A (1 mol) > B (0.5 mol) = D (0.5 mol)\n\n    **答案是 2g of Hydrogen gas。**"
  },
  {
    question: "Zinc reacts with sulfuric acid: $Zn + H_{2}SO_{4} \\rightarrow ZnSO_{4} + H_{2}$. If 13g of zinc is used, what is the volume of hydrogen produced at room temperature? (JAR: Zn=65; 1 mole of gas occupies $24 dm^{3}$ at room condition)<br/><br/>Zink bertindak balas dengan asid sulfurik: $Zn + H_{2}SO_{4} \\rightarrow ZnSO_{4} + H_{2}$. Jika 13g zink digunakan, apakah isipadu hidrogen yang terhasil pada suhu bilik?",
    options: ["$2.4 dm^{3}$", "$4.8 dm^{3}$", "$12.0 dm^{3}$", "$24.0 dm^{3}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算锌 (Zn) 的摩尔数:**\n    Moles of Zn = $\\frac{13 g}{65 g/mol} = 0.2$ mol\n\n2.  **根据方程式确定氢气 ($H_{2}$) 的摩尔数:**\n    从方程式可以看出, Zn 和 $H_{2}$ 的摩尔比是 1:1。\n    Moles of $H_{2}$ = 0.2 mol\n\n3.  **计算氢气在室温下的体积:**\n    Volume of $H_{2} = 0.2 mol \\times 24 dm^{3}/mol = 4.8 dm^{3}$\n\n    **答案是 $4.8 dm^{3}$。**"
  },
  {
    question: "What mass of copper can be obtained from 32g of copper(II) oxide, CuO, by reduction with hydrogen? (Equation: $CuO + H_{2} \\rightarrow Cu + H_{2}O$; JAR: Cu=64, O=16)<br/><br/>Apakah jisim kuprum yang boleh diperolehi daripada 32g kuprum(II) oksida, CuO, melalui penurunan dengan hidrogen?",
    options: ["6.4 g", "12.8 g", "25.6 g", "32.0 g"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **计算 CuO 的摩尔质量:**\n    Molar Mass of CuO = $64 + 16 = 80$ g/mol\n\n2.  **计算 CuO 的摩尔数:**\n    Moles of CuO = $\\frac{32 g}{80 g/mol} = 0.4$ mol\n\n3.  **根据方程式确定 Cu 的摩尔数:**\n    从方程式可以看出, CuO 和 Cu 的摩尔比是 1:1。\n    Moles of Cu = 0.4 mol\n\n4.  **计算 Cu 的质量:**\n    Mass of Cu = $0.4 mol \\times 64 g/mol = 25.6$ g\n\n    **答案是 25.6 g。**"
  },
  {
    question: "A gas occupies $560 cm^{3}$ at STP. How many molecules does it contain? (Avogadro's constant, $6 \\times 10^{23}$; 1 mole of gas occupies $22.4 dm^{3}$ at STP)<br/><br/>Suatu gas menempati $560 cm^{3}$ pada STP. Berapakah bilangan molekul yang terkandung di dalamnya?",
    options: ["$1.5 \\times 10^{22}$", "$3.0 \\times 10^{22}$", "$6.0 \\times 10^{22}$", "$1.5 \\times 10^{23}$"],
    answer: 0,
    explanation: "#### 中文解题步骤:\n1.  **转换体积单位:**\n    Volume = $560 cm^{3} = 0.56 dm^{3}$\n\n2.  **计算摩尔数:**\n    Moles = $\\frac{0.56 dm^{3}}{22.4 dm^{3}/mol} = 0.025$ mol\n\n3.  **计算分子数量:**\n    Number of molecules = $0.025 mol \\times 6 \\times 10^{23} molecules/mol = 0.15 \\times 10^{23} = 1.5 \\times 10^{22}$ molecules\n\n    **答案是 $1.5 \\times 10^{22}$。**"
  },
  {
    question: "What volume of water must be added to $50 cm^{3}$ of $2.0 mol/dm^{3}$ HCl to produce a $0.4 mol/dm^{3}$ solution?<br/><br/>Apakah isipadu air yang mesti ditambah kepada $50 cm^{3}$ HCl $2.0 mol/dm^{3}$ untuk menghasilkan larutan $0.4 mol/dm^{3}$?",
    options: ["$100 cm^{3}$", "$150 cm^{3}$", "$200 cm^{3}$", "$250 cm^{3}$"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **使用稀释公式 $M_{1}V_{1} = M_{2}V_{2}$:**\n    $M_{1} = 2.0 mol/dm^{3}$, $V_{1} = 50 cm^{3}$\n    $M_{2} = 0.4 mol/dm^{3}$, $V_{2}$ = ?\n\n2.  **计算稀释后的最终体积 ($V_{2}$):**\n    $(2.0)(50) = (0.4)(V_{2})$\n    $100 = 0.4 V_{2}$\n    $V_{2} = \\frac{100}{0.4} = 250 cm^{3}$\n\n3.  **计算需要加入的水的体积:**\n    Volume of water added = $V_{2} - V_{1} = 250 cm^{3} - 50 cm^{3} = 200 cm^{3}$\n\n    **答案是 $200 cm^{3}$。**"
  },
  {
    question: "When calcium carbonate is heated, it decomposes: $CaCO_{3}(s) \\rightarrow CaO(s) + CO_{2}(g)$. What mass of $CaCO_{3}$ is needed to produce 11.2g of CaO? (JAR: Ca=40, C=12, O=16)<br/><br/>Apabila kalsium karbonat dipanaskan, ia terurai: $CaCO_{3}(s) \\rightarrow CaO(s) + CO_{2}(g)$. Apakah jisim $CaCO_{3}$ yang diperlukan untuk menghasilkan 11.2g CaO?",
    options: ["10 g", "20 g", "40 g", "50 g"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算 CaO 的摩尔质量:**\n    Molar Mass of CaO = $40 + 16 = 56$ g/mol\n\n2.  **计算 CaO 的摩尔数:**\n    Moles of CaO = $\\frac{11.2 g}{56 g/mol} = 0.2$ mol\n\n3.  **根据方程式确定 $CaCO_{3}$ 的摩尔数:**\n    从方程式可以看出, $CaCO_{3}$ 和 CaO 的摩尔比是 1:1。\n    Moles of $CaCO_{3}$ = 0.2 mol\n\n4.  **计算 $CaCO_{3}$ 的摩尔质量:**\n    Molar Mass of $CaCO_{3} = 40 + 12 + (3 \\times 16) = 100$ g/mol\n\n5.  **计算 $CaCO_{3}$ 的质量:**\n    Mass of $CaCO_{3} = 0.2 mol \\times 100 g/mol = 20$ g\n\n    **答案是 20 g。**"
  },
  {
    question: "How many moles of sulfate ions, $SO_{4}^{2-}$, are present in 0.5 moles of aluminium sulfate, $Al_{2}(SO_{4})_{3}$?<br/><br/>Berapakah bilangan mol ion sulfat, $SO_{4}^{2-}$, yang terdapat dalam 0.5 mol aluminium sulfat, $Al_{2}(SO_{4})_{3}$?",
    options: ["0.5 mol", "1.0 mol", "1.5 mol", "2.0 mol"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **分析化学式:**\n    化学式 $Al_{2}(SO_{4})_{3}$ 表示每 1 摩尔的硫酸铝含有 3 摩尔的硫酸根离子 ($SO_{4}^{2-}$)。\n\n2.  **计算硫酸根离子的摩尔数:**\n    Moles of $SO_{4}^{2-}$ = Moles of $Al_{2}(SO_{4})_{3} \\times 3$\n    = $0.5 mol \\times 3 = 1.5$ mol\n\n    **答案是 1.5 mol。**"
  },
  {
    question: "The relative molecular mass of a gas is 64. What is the most likely identity of the gas? (JAR: S=32, O=16, C=12, H=1)<br/><br/>Jisim molekul relatif suatu gas ialah 64. Apakah identiti gas yang paling mungkin?",
    options: ["$O_{2}$", "$SO_{2}$", "$CH_{4}$", "$CO_{2}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算每个选项的摩尔质量:**\n    A) $O_{2}$: $2 \\times 16 = 32$ g/mol\n    B) $SO_{2}$: $32 + (2 \\times 16) = 32 + 32 = 64$ g/mol\n    C) $CH_{4}$: $12 + (4 \\times 1) = 16$ g/mol\n    D) $CO_{2}$: $12 + (2 \\times 16) = 12 + 32 = 44$ g/mol\n\n2.  **比较并选择:**\n    $SO_{2}$ 的摩尔质量是 64 g/mol。\n\n    **答案是 $SO_{2}$。**"
  },
  {
    question: "Which sample has the greatest mass? (JAR: Fe=56, Mg=24, Li=7, Pb=207)<br/><br/>Sampel manakah yang mempunyai jisim terbesar?",
    options: ["0.2 mol of Fe", "0.5 mol of Mg", "2.0 mol of Li", "0.1 mol of Pb"],
    answer: 3,
    explanation: "#### 中文解题步骤:\n1.  **计算每个选项的质量:**\n    A) Fe: $0.2 mol \\times 56 g/mol = 11.2$ g\n    B) Mg: $0.5 mol \\times 24 g/mol = 12.0$ g\n    C) Li: $2.0 mol \\times 7 g/mol = 14.0$ g\n    D) Pb: $0.1 mol \\times 207 g/mol = 20.7$ g\n\n2.  **比较并选择:**\n    20.7g (Pb) 是最大的质量。\n\n    **答案是 0.1 mol of Pb。**"
  },
  {
    question: "What volume, in $cm^{3}$, of $0.5 mol/dm^{3}$ sulfuric acid is required to react completely with 4g of magnesium? (Equation: $Mg + H_{2}SO_{4} \\rightarrow MgSO_{4} + H_{2}$; JAR: Mg=24)<br/><br/>Apakah isipadu, dalam $cm^{3}$, asid sulfurik $0.5 mol/dm^{3}$ yang diperlukan untuk bertindak balas lengkap dengan 4g magnesium?",
    options: ["$167 cm^{3}$", "$333 cm^{3}$", "$500 cm^{3}$", "$667 cm^{3}$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算镁 (Mg) 的摩尔数:**\n    Moles of Mg = $\\frac{4 g}{24 g/mol} = \\frac{1}{6} \\approx 0.1667$ mol\n\n2.  **根据方程式确定硫酸 ($H_{2}SO_{4}$) 的摩尔数:**\n    摩尔比 Mg : $H_{2}SO_{4}$ 是 1:1, 所以 Moles of $H_{2}SO_{4} = \\frac{1}{6}$ mol\n\n3.  **计算所需硫酸的体积 ($dm^{3}$):**\n    Volume = $\\frac{\\text{Moles}}{\\text{Molarity}} = \\frac{1/6 mol}{0.5 mol/dm^{3}} = \\frac{1}{3} dm^{3} \\approx 0.333 dm^{3}$\n\n4.  **转换单位:**\n    Volume in $cm^{3} = \\frac{1}{3} dm^{3} \\times 1000 cm^{3}/dm^{3} \\approx 333 cm^{3}$\n\n    **答案是 $333 cm^{3}$。**"
  },
  {
    question: "The molecular formula of butane is $C_{4}H_{10}$. What is its empirical formula?<br/><br/>Formula molekul butana ialah $C_{4}H_{10}$. Apakah formula empiriknya?",
    options: ["$C_{2}H_{5}$", "$CH_{2}$", "$C_{4}H_{10}$", "$CH_{3}$"],
    answer: 0,
    explanation: "#### 中文解题步骤:\n1.  **找到最简整数比:**\n    分子式是 $C_{4}H_{10}$。\n    下标 4 和 10 的最大公约数是 2。\n\n2.  **将下标除以最大公约数:**\n    C: $4 / 2 = 2$\n    H: $10 / 2 = 5$\n    实验式是 $C_{2}H_{5}$\n\n    **答案是 $C_{2}H_{5}$。**"
  },
  {
    question: "How many oxygen atoms are there in 0.2 mol of potassium nitrate, $KNO_{3}$? (Avogadro's constant, $6 \\times 10^{23}$)<br/><br/>Berapakah bilangan atom oksigen yang terdapat dalam 0.2 mol kalium nitrat, $KNO_{3}$?",
    options: ["$1.2 \\times 10^{23}$", "$2.4 \\times 10^{23}$", "$3.6 \\times 10^{23}$", "$4.8 \\times 10^{23}$"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **计算 $KNO_{3}$ 中氧原子的摩尔数:**\n    每摩尔 $KNO_{3}$ 含有 3 摩尔的氧原子。\n    Moles of O atoms = $0.2 mol \\times 3 = 0.6$ mol\n\n2.  **计算氧原子的数量:**\n    Number of O atoms = $0.6 mol \\times 6 \\times 10^{23} atoms/mol = 3.6 \\times 10^{23}$ atoms\n\n    **答案是 $3.6 \\times 10^{23}$。**"
  },
  {
    question: "If 0.5 mol of propane ($C_{3}H_{8}$) is burned completely, what volume of $CO_{2}$ is formed at room temperature? (Equation: $C_{3}H_{8} + 5O_{2} \\rightarrow 3CO_{2} + 4H_{2}O$; 1 mole of gas occupies $24 dm^{3}$ at room condition)<br/><br/>Jika 0.5 mol propana ($C_{3}H_{8}$) dibakar lengkap, apakah isipadu $CO_{2}$ yang terbentuk pada suhu bilik?",
    options: ["$12 dm^{3}$", "$24 dm^{3}$", "$36 dm^{3}$", "$48 dm^{3}$"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **根据方程式确定 $CO_{2}$ 的摩尔数:**\n    从方程式可以看出, $C_{3}H_{8}$ 和 $CO_{2}$ 的摩尔比是 1:3。\n    Moles of $CO_{2} = 0.5 mol \\times 3 = 1.5$ mol\n\n2.  **计算 $CO_{2}$ 在室温下的体积:**\n    Volume of $CO_{2} = 1.5 mol \\times 24 dm^{3}/mol = 36 dm^{3}$\n\n    **答案是 $36 dm^{3}$。**"
  },
  {
    question: "What is the mass in grams of $1.2 \\times 10^{22}$ atoms of magnesium? (JAR: Mg=24; Avogadro's constant, $6 \\times 10^{23}$)<br/><br/>Apakah jisim dalam gram bagi $1.2 \\times 10^{22}$ atom magnesium?",
    options: ["0.24 g", "0.48 g", "1.2 g", "2.4 g"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算镁的摩尔数:**\n    Moles = $\\frac{1.2 \\times 10^{22}}{6 \\times 10^{23}} = 0.2 \\times 10^{-1} = 0.02$ mol\n\n2.  **计算质量:**\n    Mass = $0.02 mol \\times 24 g/mol = 0.48$ g\n\n    **答案是 0.48 g。**"
  },
  {
    question: "Determine the mass of salt produced when $100 cm^{3}$ of $1.0 mol/dm^{3}$ nitric acid ($HNO_{3}$) reacts with excess potassium hydroxide ($KOH$). (Equation: $HNO_{3} + KOH \\rightarrow KNO_{3} + H_{2}O$; JAR: K=39, N=14, O=16)<br/><br/>Tentukan jisim garam yang terhasil apabila $100 cm^{3}$ asid nitrik ($HNO_{3}$) $1.0 mol/dm^{3}$ bertindak balas dengan kalium hidroksida ($KOH$) berlebihan.",
    options: ["5.05 g", "10.1 g", "15.15 g", "20.2 g"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算 $HNO_{3}$ 的摩尔数 (limiting reactant):**\n    Volume = $100 cm^{3} = 0.1 dm^{3}$\n    Moles of $HNO_{3} = 1.0 mol/dm^{3} \\times 0.1 dm^{3} = 0.1$ mol\n\n2.  **根据方程式确定盐 ($KNO_{3}$) 的摩尔数:**\n    摩尔比 $HNO_{3}$ : $KNO_{3}$ 是 1:1, 所以 Moles of $KNO_{3} = 0.1$ mol\n\n3.  **计算 $KNO_{3}$ 的摩尔质量:**\n    Molar Mass = $39 + 14 + (3 \\times 16) = 101$ g/mol\n\n4.  **计算 $KNO_{3}$ 的质量:**\n    Mass = $0.1 mol \\times 101 g/mol = 10.1$ g\n\n    **答案是 10.1 g。**"
  },
  {
    question: "Which quantity contains more molecules, 4g of $H_{2}$ or 16g of $O_{2}$? (JAR: H=1, O=16)<br/><br/>Kuantiti manakah yang mengandungi lebih banyak molekul, 4g $H_{2}$ atau 16g $O_{2}$?",
    options: ["4g of $H_{2}$", "16g of $O_{2}$", "Both are equal", "Cannot be determined"],
    answer: 0,
    explanation: "#### 中文解题步骤:\n1.  **计算 $H_{2}$ 的摩尔数:**\n    Molar Mass of $H_{2} = 2$ g/mol\n    Moles of $H_{2} = \\frac{4 g}{2 g/mol} = 2$ mol\n\n2.  **计算 $O_{2}$ 的摩尔数:**\n    Molar Mass of $O_{2} = 32$ g/mol\n    Moles of $O_{2} = \\frac{16 g}{32 g/mol} = 0.5$ mol\n\n3.  **比较摩尔数:**\n    因为摩尔数与分子数成正比, 2 mol 的 $H_{2}$ 含有比 0.5 mol 的 $O_{2}$ 更多的分子。\n\n    **答案是 4g of $H_{2}$。**"
  },
  {
    question: "What is the volume of 3.0 moles of any gas at STP?<br/><br/>Apakah isipadu bagi 3.0 mol sebarang gas pada STP?",
    options: ["$22.4 dm^{3}$", "$44.8 dm^{3}$", "$67.2 dm^{3}$", "$89.6 dm^{3}$"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **使用摩尔体积:**\n    在STP条件下, 1摩尔任何气体都占据 $22.4 dm^{3}$。\n\n2.  **计算体积:**\n    Volume = $3.0 mol \\times 22.4 dm^{3}/mol = 67.2 dm^{3}$\n\n    **答案是 $67.2 dm^{3}$。**"
  },
  {
    question: "A compound is found to contain 50% sulfur and 50% oxygen by mass. What is its empirical formula? (JAR: S=32, O=16)<br/><br/>Suatu sebatian didapati mengandungi 50% sulfur dan 50% oksigen mengikut jisim. Apakah formula empiriknya?",
    options: ["SO", "$SO_{2}$", "$SO_{3}$", "$S_{2}O$"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算各元素的摩尔比:**\n    假设有 100g 化合物, 则含有 50g S 和 50g O。\n    Moles of S = $\\frac{50 g}{32 g/mol} \\approx 1.56$ mol\n    Moles of O = $\\frac{50 g}{16 g/mol} \\approx 3.125$ mol\n\n2.  **找到最简整数比:**\n    Ratio S:O = $\\frac{1.56}{1.56} : \\frac{3.125}{1.56} \\approx 1:2$\n    实验式是 $SO_{2}$\n\n    **答案是 $SO_{2}$。**"
  },
  {
    question: "In a reaction, 10g of calcium carbonate produced 4g of calcium oxide. What is the percentage yield? (Equation: $CaCO_{3} \\rightarrow CaO + CO_{2}$; JAR: Ca=40, C=12, O=16)<br/><br/>Dalam satu tindak balas, 10g kalsium karbonat menghasilkan 4g kalsium oksida. Apakah peratus hasil?",
    options: ["40.0%", "56.0%", "71.4%", "80.0%"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **计算理论产量 (Theoretical Yield) of CaO:**\n    Moles of $CaCO_{3}$ = $\\frac{10 g}{100 g/mol} = 0.1$ mol\n    From stoichiometry (1:1), Moles of CaO produced should be 0.1 mol.\n    Theoretical Mass of CaO = $0.1 mol \\times 56 g/mol = 5.6$ g\n\n2.  **计算百分比产率:**\n    Percentage Yield = $\\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100\\%$\n    = $\\frac{4 g}{5.6 g} \\times 100\\% \\approx 71.4\\%$\n\n    **答案是 71.4%。**"
  },
  {
    question: "What mass of solute is present in $50 cm^{3}$ of a $2.0 mol/dm^{3}$ potassium bromide (KBr) solution? (JAR: K=39, Br=80)<br/><br/>Apakah jisim zat terlarut yang terdapat dalam $50 cm^{3}$ larutan kalium bromida (KBr) $2.0 mol/dm^{3}$?",
    options: ["5.95 g", "11.9 g", "23.8 g", "47.6 g"],
    answer: 1,
    explanation: "#### 中文解题步骤:\n1.  **计算 KBr 的摩尔数:**\n    Volume = $50 cm^{3} = 0.05 dm^{3}$\n    Moles = $2.0 mol/dm^{3} \\times 0.05 dm^{3} = 0.1$ mol\n\n2.  **计算 KBr 的摩尔质量:**\n    Molar Mass = $39 + 80 = 119$ g/mol\n\n3.  **计算质量:**\n    Mass = $0.1 mol \\times 119 g/mol = 11.9$ g\n\n    **答案是 11.9 g。**"
  },
  {
    question: "How many moles of gas are present in a container of volume $60 dm^{3}$ at room temperature and pressure?<br/><br/>Berapakah bilangan mol gas yang terdapat dalam bekas berisipadu $60 dm^{3}$ pada suhu dan tekanan bilik?",
    options: ["1.5 mol", "2.0 mol", "2.5 mol", "3.0 mol"],
    answer: 2,
    explanation: "#### 中文解题步骤:\n1.  **使用室温下的摩尔体积:**\n    1 摩尔气体在室温下占据 $24 dm^{3}$。\n\n2.  **计算摩尔数:**\n    Moles = $\\frac{60 dm^{3}}{24 dm^{3}/mol} = 2.5$ mol\n\n    **答案是 2.5 mol。**"
  }
];