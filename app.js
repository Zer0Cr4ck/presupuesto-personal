// Clase Movimiento
class Movimiento {
  constructor(tipo, descripcion, valor) {
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.valor = valor;
  }

  mostrar() {
    return `Tipo: ${this.tipo} | Descripción: ${this.descripcion} | Valor: $${this.valor.toFixed(2)}`;
  }
}

// Clase Principal
class GestorPresupuesto {
  constructor() {
    this.movimientos = [];
  }


  ingresarIngreso() {
    const descripcion = prompt("Ingrese la descripción del ingreso:");
    const valor = Number(prompt("Ingrese el valor del ingreso:"));

    if (valor <= 0) {
      console.log("El valor debe ser mayor que 0.");
      return;
    }

    const nuevoIngreso = new Movimiento("Ingreso", descripcion, valor);
    this.movimientos.push(nuevoIngreso);
    console.log(`Ingreso registrado correctamente.`);
   
  }

  ingresarEgreso() {
    const descripcion = prompt("Ingrese la descripción del egreso:");
    const valor = Number(prompt("Ingrese el valor del egreso:"));

    if (valor <= 0) {
      console.log("El valor debe ser mayor que 0.");
      return;
    }

    const nuevoEgreso = new Movimiento("Egreso", descripcion, valor);
    this.movimientos.push(nuevoEgreso);
    console.log(`Egreso registrado correctamente.`);
  }

  buscarMovimiento() {
    const busqueda = prompt("Ingrese la descripción a buscar:");
    const resultado = this.movimientos.filter( m => m.descripcion === busqueda);

    if (resultado.length > 0) {
      console.log("Movimientos encontrados:");
      resultado.map(m => console.log(m.mostrar()));
    } else {
      console.log("No se encontró ningún movimiento con esa descripción.");
    }

    this.verMovimientos();
  }

  eliminarMovimiento() {
    const descripcion = prompt("Ingrese la descripción del movimiento a eliminar:");
    const antes = this.movimientos.length;
    this.movimientos = this.movimientos.filter(m => m.descripcion !== descripcion );

    if (this.movimientos.length < antes) {
      console.log("Movimiento eliminado correctamente.");
    } else {
      console.log("No se encontró el movimiento.");
    }

    this.verMovimientos();
  }

  verMovimientos() {
    if (this.movimientos.length === 0) {
      console.log("No hay movimientos registrados.");
      return;
    }

    console.log("Movimientos registrados:");
    this.movimientos.map(m => console.log(m.mostrar()));
  }

  verSaldo() {
    const ingresos = this.movimientos.filter(m => m.tipo === "Ingreso").reduce((acc, m) => acc + m.valor, 0);

    const egresos = this.movimientos.filter(m => m.tipo === "Egreso").reduce((acc, m) => acc + m.valor, 0);
    const saldo = ingresos - egresos;

    console.log("Resumen Presupuesto personal :");
    console.log(`Total Ingresos: ${ingresos}`);
    console.log(`Total Egresos: ${egresos}`);
    console.log(`Saldo Actual: ${saldo}`);
  }
}


const gestor = new GestorPresupuesto();

let opcion = prompt(`Bienvenido a Gestión de Presupuesto Personal
\nEscoja una opción:
1. Registrar Ingreso
2. Registrar Egreso
3. Buscar Movimiento
4. Eliminar Movimiento
5. Ver todos los movimientos
6. Ver saldo actual
7. Salir`);

while (opcion !== "7") {
  if (opcion === "1") {
    gestor.ingresarIngreso(); 
  } else if (opcion === "2") {
    gestor.ingresarEgreso(); 
  } else if (opcion === "3") {
    gestor.buscarMovimiento();
  } else if (opcion === "4") {
    gestor.eliminarMovimiento();
  } else if (opcion === "5") {
    gestor.verMovimientos();
  } else if (opcion === "6") {
    gestor.verSaldo();
  } else {
    console.log("opcion no válida.");
  }

  opcion = prompt(`Bienvenido a Gestión de Presupuesto Personal
\nEscoja una opción:
1. Registrar Ingreso
2. Registrar Egreso
3. Buscar Movimiento
4. Eliminar Movimiento
5. Ver todos los movimientos
6. Ver saldo actual
7. Salir`);
}

console.log(" Gracias");
