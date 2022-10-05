interface ImplEnglishLang {
    speakEnglish():void;
}

interface ImplChineseLang {
    speakChinese():void;
}

class EnglishLang implements ImplEnglishLang {
    speakEnglish(): void {
        console.log("english speaker");
    }
    
}

class ChineseLang implements ImplChineseLang {
    speakChinese(): void {
        console.log("speaking chinese");
    }
    
}

class ChineseToEnglish implements ImplEnglishLang{
    chineseLang: ImplChineseLang;

    constructor(chineseLang:ImplChineseLang){
        this.chineseLang=chineseLang;
    }

    speakEnglish(): void {
        console.log("from chinese to english");
        this.chineseLang.speakChinese();
    }
    
    
}


let newChineseLang = new ChineseLang();
let newChineseToEng = new ChineseToEnglish(newChineseLang);
newChineseToEng.speakEnglish();
// newChineseToEng.chineseLang.speakChinese();


export {};