export type layoutPayload = {
    id?:string,
    name: string,
    classes: string,
    type: 'fixed' | 'fluid',
    rows: {
      gridCols: number,
      gridGap: number,
      cols:{
        classes?: string,
        span?: number,
        components: JSX.Element
      }[]
    }[],
  }[]