import { Fortune } from "../fortune/index"

describe('Fortune', () => {
  let fortune : any

  beforeEach(() => {
    fortune = new Fortune('牛島', '19971129', true)
  })
  it('test get player name', () => {
    expect(fortune.getPlayerName()).toBe('牛島')
  })
  it('test get player birthday', () => {
    expect(fortune.getPlayerBirthday()).toBe('1997年11月29日')
  })
  it('test get lucky mode', () => {
    expect(fortune.isLuckyMode()).toBe(true)
  })
  it('test tellFortunes', () => {
    expect(fortune.tellFortunes()).toBe('普通')
  })
})