export type layoutPayload = {
    id?:string,
    name: string,
    className: string,
    type: 'fixed' | 'fluid',
    rows: {
      gridCols: number,
      gridGap: number,
      cols:{
        className?: string,
        span?: number,
        components: JSX.Element
      }[]
    }[],
  }[]