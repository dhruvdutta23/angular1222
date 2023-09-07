export class btnClickSuccessSound {
    clickSucessAudio: any;
    constructor() {
        this.clickSucessAudio = new Audio('./assets/btnClickSucessSound.wav');

    }

    playAudio() {
        this.clickSucessAudio.play();
    }

    pauseAudio() {
        this.clickSucessAudio.pause();
    }
}
export class btnClickFailSound {
    clickFailAudio: any;

    constructor() {
        this.clickFailAudio = new Audio('./assets/btnClickFailSound.wav');

    }
    playAudio() {
        this.clickFailAudio.play();
    }

    pauseAudio() {
        this.clickFailAudio.pause();
    }
}
export const regUsers = [
    {
        email: "dhruba@gmail.com"
    }
]

export interface IRegUsers {
    email: string
}



export interface IEmployee {
    id: string,
    employee_name: string,
    employee_age: number,
    employee_salary: number
}
export const employeeDummyData = [
    {
        id: '0',
        name: "sayan",
        age: '30',
        phone: 'xxxx-xxx-xxx'
    },
    {
        id: '1',
        name: "nayim",
        age: '24',
        phone: 'xxxx-xxx-xxx'

    },
    {
        id: '2',
        name: "dhruba",
        age: '25',
        phone: 'xxxx-xxx-xxx'
    },

];