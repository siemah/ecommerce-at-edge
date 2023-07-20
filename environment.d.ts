declare namespace NodeJS {
  export interface ProcessEnv {
    readonly woo_consumer_secret: string
    readonly woo_consumer_key: string
  }
}