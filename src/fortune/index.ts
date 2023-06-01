export class Fortune {
  playerName : string
  playerBirthday : string
  luckyMode : boolean

  constructor(name:string, birthday:string, mode:boolean){
    this.playerName = name
    this.playerBirthday = birthday
    this.luckyMode = mode
  }

  getPlayerName(){
    return this.playerName
  }
  
  getPlayerBirthday(){
    return this.playerBirthday.slice(0, 4) + '年' + this.playerBirthday.slice(4, 6) + '月' + this.playerBirthday.slice(6, 8) + '日'
  }
  
  isLuckyMode(){
    return this.luckyMode
  }

  tellFortunes(){
    const length : number = this.getPlayerName().length
    const year : number = Number(this.playerBirthday.slice(0, 4))
    const month = Number(this.playerBirthday.slice(4, 6))
    const date = Number(this.playerBirthday.slice(6, 8))
    const unixTime = Number(new Date(year, month, date))

    const sum = length + unixTime
    const result = sum % 3

    if(result == 0){
      return "良い"
    }else if(result == 1){
      if(this.isLuckyMode() == true){
        return '良い'
      }else{
        return '普通'
      }
    }else{
      if(this.isLuckyMode() == true){
        return '普通'
      }else{
        return '悪い'
      }
    }
  }
}