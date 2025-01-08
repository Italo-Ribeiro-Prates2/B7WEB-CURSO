let profession = "fiscal"
       
switch (profession) {
    case "advogado":
        console.log("O advogado possui um salário de R$ 8000,00.");
        break;
    case "contador":
        console.log("O contador possui um salário de R$ 5000,00.");
        break;
    case "fiscal":
        console.log("O fiscal possui um salário de R$ 7000,00.");
        break;
    default:
        console.log("Profissão não encontrada.");
}