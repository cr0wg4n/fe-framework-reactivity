export const DiceNumbers = ['1', '2', '3', '4', '5', '6'] as const

export type DiceNumberType = (typeof DiceNumbers)[number]
