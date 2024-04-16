class Default {
    texto: string;
    numero: number;
    qualquer: any;
    booleano: boolean;
    array: Array<any>; // any[];

    constructor() {
        this.metodo();
        this.array = [
            {
                teste: 'teste',

            }

        ]

    }

    metodo() {
        this.numero = 10;
        this.texto = `Este é um alert simples em TypeScript! ${this.numero}`;

        return alert(this.texto);

    }

}
