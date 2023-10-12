
//% weight=14 color=#0084b4 icon="\uf206"
namespace profdetech_parking_trottinettes{

/**
     * P8 = Fin de course trottinette 1
	 * P13 = Fin de course trottinette 2
	 * P12 = Fin de course trottinette 3
     */
    //% blockId=park_descriptif
    //% block="Descriptif branchement maquette parking"
	//% weight=99 blockGap=24
    export function park_descriptif(): void {
    }


/**
     * Etat du fin de course n°1 sur P8
     */
    //% blockId=FC1
    //% block="Etat fin de course 1ere place de parking (0 ou 1)"
	//% weight=93 blockGap=8
    export function FC1(): number {
		return pins.digitalReadPin(DigitalPin.P8);
    }
	
/**
     * Etat du fin de course n°2 sur P13
     */
    //% blockId=FC2
    //% block="Etat fin de course 2eme place de parking (0 ou 1)"
	//% weight=92 blockGap=8
    export function FC2(): number {
		return pins.digitalReadPin(DigitalPin.P13);
    }
	
	
	/**
     * Etat du fin de course n°3 sur P12
     */
    //% blockId=FC3
    //% block="Etat fin de course 3eme place de parking (0 ou 1)"
	//% weight=91 blockGap=24
    export function FC3(): number {
		return pins.digitalReadPin(DigitalPin.P12);
    }

	/**
     * renvoie vrai si la trottinette 1 est présente (P8)
     */
    //% blockId=trott1
    //% block="La trottinette active le fin de course 1 (vrai ou faux)"
	//% weight=83 blockGap=8
    export function trot1(): boolean {
		if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            return true;
        } else return false;
    }
	
		/**
     * renvoie vrai si la trottinette 2 est présente (P13)
     */
    //% blockId=trott2
    //% block="La trottinette active le fin de course 2 (vrai ou faux)"
	//% weight=82 blockGap=8
    export function trot2(): boolean {
		if (pins.digitalReadPin(DigitalPin.P13) == 1) {
            return true;
        } else return false;
    }
	
		/**
     * renvoie vrai si la trottinette 3 est présente (P12)
     */
    //% blockId=trott3
    //% block="La trottinette active le fin de course 3 (vrai ou faux)"
	//% weight=81 blockGap=24
    export function trot3(): boolean {
		if (pins.digitalReadPin(DigitalPin.P12) == 1) {
            return true;
        } else return false;
    }
		
}
