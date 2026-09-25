import inquirer from "inquirer";
import chalk from "chalk";

export async function mostrarMenu() {
  let salir = false;

  while (!salir) {
    const { opcion } = await inquirer.prompt([
      {
        type: "select",
        name: "opcion",
        message: chalk.cyan("Gestión de Gimnasio — Menú principal"),
        choices: [
          { name: "Clientes", value: "clientes" },
          { name: "Planes", value: "planes" },
          { name: "Contratos", value: "contratos" },
          { name: "Seguimiento físico", value: "seguimiento" },
          { name: "Nutrición", value: "nutricion" },
          { name: "Finanzas", value: "finanzas" },
          new inquirer.Separator(),
          { name: "Salir", value: "salir" },
        ],
      },
    ]);

    switch (opcion) {
      case "clientes":
        console.log(chalk.yellow("(Aquí irá el submenú de clientes, próximamente)"));
        break;
      case "planes":
        console.log(chalk.yellow("(Aquí irá el submenú de planes, próximamente)"));
        break;
      case "contratos":
        console.log(chalk.yellow("(Aquí irá el submenú de contratos, próximamente)"));
        break;
      case "seguimiento":
        console.log(chalk.yellow("(Aquí irá el submenú de seguimiento, próximamente)"));
        break;
      case "nutricion":
        console.log(chalk.yellow("(Aquí irá el submenú de nutrición, próximamente)"));
        break;
      case "finanzas":
        console.log(chalk.yellow("(Aquí irá el submenú de finanzas, próximamente)"));
        break;
      case "salir":
        salir = true;
        console.log(chalk.green("¡Hasta luego!"));
        break;
    }
  }
}