(() => {

    // 1. Resolver sin utilizar múltiples condicionales
    // Utilizamos includes() para comprobar si la fruta existe en el array
    function isRedFruit(fruit: string): boolean {

        const redFruits = ['manzana', 'cereza', 'ciruela'];

        return redFruits.includes(fruit);
    }


    // 2. Simplificar esta función
    // Utilizamos un objeto literal para relacionar cada color con sus frutas
    function getFruitsByColor(color: string): string[] {

        const fruitsByColor: Record<string, string[]> = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        };

        // Buscamos las frutas correspondientes al color recibido
        const fruits = fruitsByColor[color];

        // Validamos si el color existe en nuestro objeto
        if (!fruits) {
            throw new Error('El color debe ser: red, yellow, purple');
        }

        return fruits;
    }


    // 3. Simplificar esta función
    // Declaramos las variables que indican si cada paso está funcionando
    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    function workingSteps(): string {

        // Almacenamos el estado de los cuatro pasos en un array
        const steps = [
            isFirstStepWorking,
            isSecondStepWorking,
            isThirdStepWorking,
            isFourthStepWorking
        ];

        // findIndex() busca la posición del primer paso que esté fallando
        const brokenStep = steps.findIndex(step => !step);

        // Si devuelve -1, significa que todos los pasos funcionan correctamente
        return brokenStep === -1
            ? '¡Todos los pasos funcionan correctamente!'
            : `${['Primer', 'Segundo', 'Tercer', 'Cuarto'][brokenStep]} paso fallando.`;
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

    // getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de las variables para comprobar los resultados

})();
