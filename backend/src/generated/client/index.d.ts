
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Profissional
 * 
 */
export type Profissional = $Result.DefaultSelection<Prisma.$ProfissionalPayload>
/**
 * Model Servico
 * 
 */
export type Servico = $Result.DefaultSelection<Prisma.$ServicoPayload>
/**
 * Model Agendamento
 * 
 */
export type Agendamento = $Result.DefaultSelection<Prisma.$AgendamentoPayload>
/**
 * Model Financeiro
 * 
 */
export type Financeiro = $Result.DefaultSelection<Prisma.$FinanceiroPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissional`: Exposes CRUD operations for the **Profissional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissionals
    * const profissionals = await prisma.profissional.findMany()
    * ```
    */
  get profissional(): Prisma.ProfissionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servico`: Exposes CRUD operations for the **Servico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servico.findMany()
    * ```
    */
  get servico(): Prisma.ServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendamento`: Exposes CRUD operations for the **Agendamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamentos
    * const agendamentos = await prisma.agendamento.findMany()
    * ```
    */
  get agendamento(): Prisma.AgendamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financeiro`: Exposes CRUD operations for the **Financeiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Financeiros
    * const financeiros = await prisma.financeiro.findMany()
    * ```
    */
  get financeiro(): Prisma.FinanceiroDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Cliente: 'Cliente',
    Profissional: 'Profissional',
    Servico: 'Servico',
    Agendamento: 'Agendamento',
    Financeiro: 'Financeiro'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "cliente" | "profissional" | "servico" | "agendamento" | "financeiro"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Profissional: {
        payload: Prisma.$ProfissionalPayload<ExtArgs>
        fields: Prisma.ProfissionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfissionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfissionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          findFirst: {
            args: Prisma.ProfissionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfissionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          findMany: {
            args: Prisma.ProfissionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          create: {
            args: Prisma.ProfissionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          createMany: {
            args: Prisma.ProfissionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfissionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          delete: {
            args: Prisma.ProfissionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          update: {
            args: Prisma.ProfissionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfissionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfissionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfissionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          upsert: {
            args: Prisma.ProfissionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          aggregate: {
            args: Prisma.ProfissionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissional>
          }
          groupBy: {
            args: Prisma.ProfissionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfissionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalCountAggregateOutputType> | number
          }
        }
      }
      Servico: {
        payload: Prisma.$ServicoPayload<ExtArgs>
        fields: Prisma.ServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findFirst: {
            args: Prisma.ServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findMany: {
            args: Prisma.ServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          create: {
            args: Prisma.ServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          createMany: {
            args: Prisma.ServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          delete: {
            args: Prisma.ServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          update: {
            args: Prisma.ServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          deleteMany: {
            args: Prisma.ServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          upsert: {
            args: Prisma.ServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          aggregate: {
            args: Prisma.ServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServico>
          }
          groupBy: {
            args: Prisma.ServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicoCountAggregateOutputType> | number
          }
        }
      }
      Agendamento: {
        payload: Prisma.$AgendamentoPayload<ExtArgs>
        fields: Prisma.AgendamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findFirst: {
            args: Prisma.AgendamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findMany: {
            args: Prisma.AgendamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          create: {
            args: Prisma.AgendamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          createMany: {
            args: Prisma.AgendamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          delete: {
            args: Prisma.AgendamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          update: {
            args: Prisma.AgendamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          deleteMany: {
            args: Prisma.AgendamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          upsert: {
            args: Prisma.AgendamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          aggregate: {
            args: Prisma.AgendamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamento>
          }
          groupBy: {
            args: Prisma.AgendamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendamentoCountArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoCountAggregateOutputType> | number
          }
        }
      }
      Financeiro: {
        payload: Prisma.$FinanceiroPayload<ExtArgs>
        fields: Prisma.FinanceiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          findFirst: {
            args: Prisma.FinanceiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          findMany: {
            args: Prisma.FinanceiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>[]
          }
          create: {
            args: Prisma.FinanceiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          createMany: {
            args: Prisma.FinanceiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceiroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>[]
          }
          delete: {
            args: Prisma.FinanceiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          update: {
            args: Prisma.FinanceiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          deleteMany: {
            args: Prisma.FinanceiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinanceiroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>[]
          }
          upsert: {
            args: Prisma.FinanceiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          aggregate: {
            args: Prisma.FinanceiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinanceiro>
          }
          groupBy: {
            args: Prisma.FinanceiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceiroCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceiroCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    cliente?: ClienteOmit
    profissional?: ProfissionalOmit
    servico?: ServicoOmit
    agendamento?: AgendamentoOmit
    financeiro?: FinanceiroOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    agendamentos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | ClienteCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
  }


  /**
   * Count Type ProfissionalCountOutputType
   */

  export type ProfissionalCountOutputType = {
    agendamentos: number
  }

  export type ProfissionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | ProfissionalCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalCountOutputType
     */
    select?: ProfissionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
  }


  /**
   * Count Type ServicoCountOutputType
   */

  export type ServicoCountOutputType = {
    agendamentos: number
  }

  export type ServicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | ServicoCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoCountOutputType
     */
    select?: ServicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    tipo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    tipo: string
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "tipo" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      tipo: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    telefone: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    telefone: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    telefone: number
    observacoes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    telefone: string
    observacoes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agendamentos?: boolean | Cliente$agendamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    telefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "telefone" | "observacoes" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | Cliente$agendamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      agendamentos: Prisma.$AgendamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      telefone: string
      observacoes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends Cliente$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly observacoes: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.agendamentos
   */
  export type Cliente$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    cursor?: AgendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Profissional
   */

  export type AggregateProfissional = {
    _count: ProfissionalCountAggregateOutputType | null
    _avg: ProfissionalAvgAggregateOutputType | null
    _sum: ProfissionalSumAggregateOutputType | null
    _min: ProfissionalMinAggregateOutputType | null
    _max: ProfissionalMaxAggregateOutputType | null
  }

  export type ProfissionalAvgAggregateOutputType = {
    comissao: number | null
  }

  export type ProfissionalSumAggregateOutputType = {
    comissao: number | null
  }

  export type ProfissionalMinAggregateOutputType = {
    id: string | null
    nome: string | null
    especialidade: string | null
    comissao: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfissionalMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    especialidade: string | null
    comissao: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfissionalCountAggregateOutputType = {
    id: number
    nome: number
    especialidade: number
    comissao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfissionalAvgAggregateInputType = {
    comissao?: true
  }

  export type ProfissionalSumAggregateInputType = {
    comissao?: true
  }

  export type ProfissionalMinAggregateInputType = {
    id?: true
    nome?: true
    especialidade?: true
    comissao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfissionalMaxAggregateInputType = {
    id?: true
    nome?: true
    especialidade?: true
    comissao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfissionalCountAggregateInputType = {
    id?: true
    nome?: true
    especialidade?: true
    comissao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfissionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissional to aggregate.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profissionals
    **/
    _count?: true | ProfissionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfissionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfissionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfissionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfissionalMaxAggregateInputType
  }

  export type GetProfissionalAggregateType<T extends ProfissionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissional[P]>
      : GetScalarType<T[P], AggregateProfissional[P]>
  }




  export type ProfissionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfissionalWhereInput
    orderBy?: ProfissionalOrderByWithAggregationInput | ProfissionalOrderByWithAggregationInput[]
    by: ProfissionalScalarFieldEnum[] | ProfissionalScalarFieldEnum
    having?: ProfissionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfissionalCountAggregateInputType | true
    _avg?: ProfissionalAvgAggregateInputType
    _sum?: ProfissionalSumAggregateInputType
    _min?: ProfissionalMinAggregateInputType
    _max?: ProfissionalMaxAggregateInputType
  }

  export type ProfissionalGroupByOutputType = {
    id: string
    nome: string
    especialidade: string
    comissao: number
    createdAt: Date
    updatedAt: Date
    _count: ProfissionalCountAggregateOutputType | null
    _avg: ProfissionalAvgAggregateOutputType | null
    _sum: ProfissionalSumAggregateOutputType | null
    _min: ProfissionalMinAggregateOutputType | null
    _max: ProfissionalMaxAggregateOutputType | null
  }

  type GetProfissionalGroupByPayload<T extends ProfissionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfissionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfissionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfissionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfissionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfissionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especialidade?: boolean
    comissao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agendamentos?: boolean | Profissional$agendamentosArgs<ExtArgs>
    _count?: boolean | ProfissionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especialidade?: boolean
    comissao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especialidade?: boolean
    comissao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectScalar = {
    id?: boolean
    nome?: boolean
    especialidade?: boolean
    comissao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfissionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "especialidade" | "comissao" | "createdAt" | "updatedAt", ExtArgs["result"]["profissional"]>
  export type ProfissionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | Profissional$agendamentosArgs<ExtArgs>
    _count?: boolean | ProfissionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfissionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfissionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfissionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profissional"
    objects: {
      agendamentos: Prisma.$AgendamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      especialidade: string
      comissao: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profissional"]>
    composites: {}
  }

  type ProfissionalGetPayload<S extends boolean | null | undefined | ProfissionalDefaultArgs> = $Result.GetResult<Prisma.$ProfissionalPayload, S>

  type ProfissionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfissionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfissionalCountAggregateInputType | true
    }

  export interface ProfissionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profissional'], meta: { name: 'Profissional' } }
    /**
     * Find zero or one Profissional that matches the filter.
     * @param {ProfissionalFindUniqueArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfissionalFindUniqueArgs>(args: SelectSubset<T, ProfissionalFindUniqueArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfissionalFindUniqueOrThrowArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfissionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfissionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindFirstArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfissionalFindFirstArgs>(args?: SelectSubset<T, ProfissionalFindFirstArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindFirstOrThrowArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfissionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfissionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissionals
     * const profissionals = await prisma.profissional.findMany()
     * 
     * // Get first 10 Profissionals
     * const profissionals = await prisma.profissional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profissionalWithIdOnly = await prisma.profissional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfissionalFindManyArgs>(args?: SelectSubset<T, ProfissionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissional.
     * @param {ProfissionalCreateArgs} args - Arguments to create a Profissional.
     * @example
     * // Create one Profissional
     * const Profissional = await prisma.profissional.create({
     *   data: {
     *     // ... data to create a Profissional
     *   }
     * })
     * 
     */
    create<T extends ProfissionalCreateArgs>(args: SelectSubset<T, ProfissionalCreateArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissionals.
     * @param {ProfissionalCreateManyArgs} args - Arguments to create many Profissionals.
     * @example
     * // Create many Profissionals
     * const profissional = await prisma.profissional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfissionalCreateManyArgs>(args?: SelectSubset<T, ProfissionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profissionals and returns the data saved in the database.
     * @param {ProfissionalCreateManyAndReturnArgs} args - Arguments to create many Profissionals.
     * @example
     * // Create many Profissionals
     * const profissional = await prisma.profissional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profissionals and only return the `id`
     * const profissionalWithIdOnly = await prisma.profissional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfissionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfissionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profissional.
     * @param {ProfissionalDeleteArgs} args - Arguments to delete one Profissional.
     * @example
     * // Delete one Profissional
     * const Profissional = await prisma.profissional.delete({
     *   where: {
     *     // ... filter to delete one Profissional
     *   }
     * })
     * 
     */
    delete<T extends ProfissionalDeleteArgs>(args: SelectSubset<T, ProfissionalDeleteArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissional.
     * @param {ProfissionalUpdateArgs} args - Arguments to update one Profissional.
     * @example
     * // Update one Profissional
     * const profissional = await prisma.profissional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfissionalUpdateArgs>(args: SelectSubset<T, ProfissionalUpdateArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissionals.
     * @param {ProfissionalDeleteManyArgs} args - Arguments to filter Profissionals to delete.
     * @example
     * // Delete a few Profissionals
     * const { count } = await prisma.profissional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfissionalDeleteManyArgs>(args?: SelectSubset<T, ProfissionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissionals
     * const profissional = await prisma.profissional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfissionalUpdateManyArgs>(args: SelectSubset<T, ProfissionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionals and returns the data updated in the database.
     * @param {ProfissionalUpdateManyAndReturnArgs} args - Arguments to update many Profissionals.
     * @example
     * // Update many Profissionals
     * const profissional = await prisma.profissional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profissionals and only return the `id`
     * const profissionalWithIdOnly = await prisma.profissional.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfissionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfissionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profissional.
     * @param {ProfissionalUpsertArgs} args - Arguments to update or create a Profissional.
     * @example
     * // Update or create a Profissional
     * const profissional = await prisma.profissional.upsert({
     *   create: {
     *     // ... data to create a Profissional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissional we want to update
     *   }
     * })
     */
    upsert<T extends ProfissionalUpsertArgs>(args: SelectSubset<T, ProfissionalUpsertArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalCountArgs} args - Arguments to filter Profissionals to count.
     * @example
     * // Count the number of Profissionals
     * const count = await prisma.profissional.count({
     *   where: {
     *     // ... the filter for the Profissionals we want to count
     *   }
     * })
    **/
    count<T extends ProfissionalCountArgs>(
      args?: Subset<T, ProfissionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfissionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfissionalAggregateArgs>(args: Subset<T, ProfissionalAggregateArgs>): Prisma.PrismaPromise<GetProfissionalAggregateType<T>>

    /**
     * Group by Profissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfissionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfissionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfissionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfissionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profissional model
   */
  readonly fields: ProfissionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profissional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfissionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends Profissional$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profissional model
   */
  interface ProfissionalFieldRefs {
    readonly id: FieldRef<"Profissional", 'String'>
    readonly nome: FieldRef<"Profissional", 'String'>
    readonly especialidade: FieldRef<"Profissional", 'String'>
    readonly comissao: FieldRef<"Profissional", 'Float'>
    readonly createdAt: FieldRef<"Profissional", 'DateTime'>
    readonly updatedAt: FieldRef<"Profissional", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profissional findUnique
   */
  export type ProfissionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional findUniqueOrThrow
   */
  export type ProfissionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional findFirst
   */
  export type ProfissionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionals.
     */
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional findFirstOrThrow
   */
  export type ProfissionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionals.
     */
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional findMany
   */
  export type ProfissionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissionals to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional create
   */
  export type ProfissionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Profissional.
     */
    data: XOR<ProfissionalCreateInput, ProfissionalUncheckedCreateInput>
  }

  /**
   * Profissional createMany
   */
  export type ProfissionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profissionals.
     */
    data: ProfissionalCreateManyInput | ProfissionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profissional createManyAndReturn
   */
  export type ProfissionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * The data used to create many Profissionals.
     */
    data: ProfissionalCreateManyInput | ProfissionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profissional update
   */
  export type ProfissionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Profissional.
     */
    data: XOR<ProfissionalUpdateInput, ProfissionalUncheckedUpdateInput>
    /**
     * Choose, which Profissional to update.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional updateMany
   */
  export type ProfissionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profissionals.
     */
    data: XOR<ProfissionalUpdateManyMutationInput, ProfissionalUncheckedUpdateManyInput>
    /**
     * Filter which Profissionals to update
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to update.
     */
    limit?: number
  }

  /**
   * Profissional updateManyAndReturn
   */
  export type ProfissionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * The data used to update Profissionals.
     */
    data: XOR<ProfissionalUpdateManyMutationInput, ProfissionalUncheckedUpdateManyInput>
    /**
     * Filter which Profissionals to update
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to update.
     */
    limit?: number
  }

  /**
   * Profissional upsert
   */
  export type ProfissionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Profissional to update in case it exists.
     */
    where: ProfissionalWhereUniqueInput
    /**
     * In case the Profissional found by the `where` argument doesn't exist, create a new Profissional with this data.
     */
    create: XOR<ProfissionalCreateInput, ProfissionalUncheckedCreateInput>
    /**
     * In case the Profissional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfissionalUpdateInput, ProfissionalUncheckedUpdateInput>
  }

  /**
   * Profissional delete
   */
  export type ProfissionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter which Profissional to delete.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional deleteMany
   */
  export type ProfissionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissionals to delete
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to delete.
     */
    limit?: number
  }

  /**
   * Profissional.agendamentos
   */
  export type Profissional$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    cursor?: AgendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Profissional without action
   */
  export type ProfissionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
  }


  /**
   * Model Servico
   */

  export type AggregateServico = {
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  export type ServicoAvgAggregateOutputType = {
    preco: number | null
    duracao: number | null
  }

  export type ServicoSumAggregateOutputType = {
    preco: number | null
    duracao: number | null
  }

  export type ServicoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    preco: number | null
    duracao: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    preco: number | null
    duracao: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicoCountAggregateOutputType = {
    id: number
    nome: number
    preco: number
    duracao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServicoAvgAggregateInputType = {
    preco?: true
    duracao?: true
  }

  export type ServicoSumAggregateInputType = {
    preco?: true
    duracao?: true
  }

  export type ServicoMinAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    duracao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicoMaxAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    duracao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicoCountAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    duracao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servico to aggregate.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicos
    **/
    _count?: true | ServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoMaxAggregateInputType
  }

  export type GetServicoAggregateType<T extends ServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServico[P]>
      : GetScalarType<T[P], AggregateServico[P]>
  }




  export type ServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithAggregationInput | ServicoOrderByWithAggregationInput[]
    by: ServicoScalarFieldEnum[] | ServicoScalarFieldEnum
    having?: ServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoCountAggregateInputType | true
    _avg?: ServicoAvgAggregateInputType
    _sum?: ServicoSumAggregateInputType
    _min?: ServicoMinAggregateInputType
    _max?: ServicoMaxAggregateInputType
  }

  export type ServicoGroupByOutputType = {
    id: string
    nome: string
    preco: number
    duracao: number
    createdAt: Date
    updatedAt: Date
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  type GetServicoGroupByPayload<T extends ServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoGroupByOutputType[P]>
        }
      >
    >


  export type ServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    duracao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agendamentos?: boolean | Servico$agendamentosArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    duracao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    duracao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectScalar = {
    id?: boolean
    nome?: boolean
    preco?: boolean
    duracao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "preco" | "duracao" | "createdAt" | "updatedAt", ExtArgs["result"]["servico"]>
  export type ServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | Servico$agendamentosArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servico"
    objects: {
      agendamentos: Prisma.$AgendamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      preco: number
      duracao: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["servico"]>
    composites: {}
  }

  type ServicoGetPayload<S extends boolean | null | undefined | ServicoDefaultArgs> = $Result.GetResult<Prisma.$ServicoPayload, S>

  type ServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicoCountAggregateInputType | true
    }

  export interface ServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servico'], meta: { name: 'Servico' } }
    /**
     * Find zero or one Servico that matches the filter.
     * @param {ServicoFindUniqueArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicoFindUniqueArgs>(args: SelectSubset<T, ServicoFindUniqueArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicoFindUniqueOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicoFindFirstArgs>(args?: SelectSubset<T, ServicoFindFirstArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servico.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicoWithIdOnly = await prisma.servico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicoFindManyArgs>(args?: SelectSubset<T, ServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servico.
     * @param {ServicoCreateArgs} args - Arguments to create a Servico.
     * @example
     * // Create one Servico
     * const Servico = await prisma.servico.create({
     *   data: {
     *     // ... data to create a Servico
     *   }
     * })
     * 
     */
    create<T extends ServicoCreateArgs>(args: SelectSubset<T, ServicoCreateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicos.
     * @param {ServicoCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicoCreateManyArgs>(args?: SelectSubset<T, ServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicos and returns the data saved in the database.
     * @param {ServicoCreateManyAndReturnArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicos and only return the `id`
     * const servicoWithIdOnly = await prisma.servico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servico.
     * @param {ServicoDeleteArgs} args - Arguments to delete one Servico.
     * @example
     * // Delete one Servico
     * const Servico = await prisma.servico.delete({
     *   where: {
     *     // ... filter to delete one Servico
     *   }
     * })
     * 
     */
    delete<T extends ServicoDeleteArgs>(args: SelectSubset<T, ServicoDeleteArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servico.
     * @param {ServicoUpdateArgs} args - Arguments to update one Servico.
     * @example
     * // Update one Servico
     * const servico = await prisma.servico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicoUpdateArgs>(args: SelectSubset<T, ServicoUpdateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicos.
     * @param {ServicoDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicoDeleteManyArgs>(args?: SelectSubset<T, ServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicoUpdateManyArgs>(args: SelectSubset<T, ServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos and returns the data updated in the database.
     * @param {ServicoUpdateManyAndReturnArgs} args - Arguments to update many Servicos.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicos and only return the `id`
     * const servicoWithIdOnly = await prisma.servico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servico.
     * @param {ServicoUpsertArgs} args - Arguments to update or create a Servico.
     * @example
     * // Update or create a Servico
     * const servico = await prisma.servico.upsert({
     *   create: {
     *     // ... data to create a Servico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servico we want to update
     *   }
     * })
     */
    upsert<T extends ServicoUpsertArgs>(args: SelectSubset<T, ServicoUpsertArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servico.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends ServicoCountArgs>(
      args?: Subset<T, ServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicoAggregateArgs>(args: Subset<T, ServicoAggregateArgs>): Prisma.PrismaPromise<GetServicoAggregateType<T>>

    /**
     * Group by Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicoGroupByArgs['orderBy'] }
        : { orderBy?: ServicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servico model
   */
  readonly fields: ServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends Servico$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Servico$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Servico model
   */
  interface ServicoFieldRefs {
    readonly id: FieldRef<"Servico", 'String'>
    readonly nome: FieldRef<"Servico", 'String'>
    readonly preco: FieldRef<"Servico", 'Float'>
    readonly duracao: FieldRef<"Servico", 'Int'>
    readonly createdAt: FieldRef<"Servico", 'DateTime'>
    readonly updatedAt: FieldRef<"Servico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Servico findUnique
   */
  export type ServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findUniqueOrThrow
   */
  export type ServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findFirst
   */
  export type ServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findFirstOrThrow
   */
  export type ServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findMany
   */
  export type ServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico create
   */
  export type ServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Servico.
     */
    data: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
  }

  /**
   * Servico createMany
   */
  export type ServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servico createManyAndReturn
   */
  export type ServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servico update
   */
  export type ServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Servico.
     */
    data: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
    /**
     * Choose, which Servico to update.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico updateMany
   */
  export type ServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
  }

  /**
   * Servico updateManyAndReturn
   */
  export type ServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
  }

  /**
   * Servico upsert
   */
  export type ServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Servico to update in case it exists.
     */
    where: ServicoWhereUniqueInput
    /**
     * In case the Servico found by the `where` argument doesn't exist, create a new Servico with this data.
     */
    create: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
    /**
     * In case the Servico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
  }

  /**
   * Servico delete
   */
  export type ServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter which Servico to delete.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico deleteMany
   */
  export type ServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to delete
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to delete.
     */
    limit?: number
  }

  /**
   * Servico.agendamentos
   */
  export type Servico$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    cursor?: AgendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Servico without action
   */
  export type ServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
  }


  /**
   * Model Agendamento
   */

  export type AggregateAgendamento = {
    _count: AgendamentoCountAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  export type AgendamentoMinAggregateOutputType = {
    id: string | null
    clienteId: string | null
    profissionalId: string | null
    servicoId: string | null
    data_hora: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgendamentoMaxAggregateOutputType = {
    id: string | null
    clienteId: string | null
    profissionalId: string | null
    servicoId: string | null
    data_hora: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgendamentoCountAggregateOutputType = {
    id: number
    clienteId: number
    profissionalId: number
    servicoId: number
    data_hora: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgendamentoMinAggregateInputType = {
    id?: true
    clienteId?: true
    profissionalId?: true
    servicoId?: true
    data_hora?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgendamentoMaxAggregateInputType = {
    id?: true
    clienteId?: true
    profissionalId?: true
    servicoId?: true
    data_hora?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgendamentoCountAggregateInputType = {
    id?: true
    clienteId?: true
    profissionalId?: true
    servicoId?: true
    data_hora?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgendamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamento to aggregate.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agendamentos
    **/
    _count?: true | AgendamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendamentoMaxAggregateInputType
  }

  export type GetAgendamentoAggregateType<T extends AgendamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamento[P]>
      : GetScalarType<T[P], AggregateAgendamento[P]>
  }




  export type AgendamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithAggregationInput | AgendamentoOrderByWithAggregationInput[]
    by: AgendamentoScalarFieldEnum[] | AgendamentoScalarFieldEnum
    having?: AgendamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendamentoCountAggregateInputType | true
    _min?: AgendamentoMinAggregateInputType
    _max?: AgendamentoMaxAggregateInputType
  }

  export type AgendamentoGroupByOutputType = {
    id: string
    clienteId: string
    profissionalId: string
    servicoId: string
    data_hora: Date
    status: string
    createdAt: Date
    updatedAt: Date
    _count: AgendamentoCountAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  type GetAgendamentoGroupByPayload<T extends AgendamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
            : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
        }
      >
    >


  export type AgendamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    profissionalId?: boolean
    servicoId?: boolean
    data_hora?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    profissionalId?: boolean
    servicoId?: boolean
    data_hora?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    profissionalId?: boolean
    servicoId?: boolean
    data_hora?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectScalar = {
    id?: boolean
    clienteId?: boolean
    profissionalId?: boolean
    servicoId?: boolean
    data_hora?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgendamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "profissionalId" | "servicoId" | "data_hora" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["agendamento"]>
  export type AgendamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type AgendamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type AgendamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }

  export type $AgendamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agendamento"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      profissional: Prisma.$ProfissionalPayload<ExtArgs>
      servico: Prisma.$ServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: string
      profissionalId: string
      servicoId: string
      data_hora: Date
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agendamento"]>
    composites: {}
  }

  type AgendamentoGetPayload<S extends boolean | null | undefined | AgendamentoDefaultArgs> = $Result.GetResult<Prisma.$AgendamentoPayload, S>

  type AgendamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendamentoCountAggregateInputType | true
    }

  export interface AgendamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agendamento'], meta: { name: 'Agendamento' } }
    /**
     * Find zero or one Agendamento that matches the filter.
     * @param {AgendamentoFindUniqueArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendamentoFindUniqueArgs>(args: SelectSubset<T, AgendamentoFindUniqueArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendamentoFindUniqueOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendamentoFindFirstArgs>(args?: SelectSubset<T, AgendamentoFindFirstArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamentos
     * const agendamentos = await prisma.agendamento.findMany()
     * 
     * // Get first 10 Agendamentos
     * const agendamentos = await prisma.agendamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendamentoFindManyArgs>(args?: SelectSubset<T, AgendamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendamento.
     * @param {AgendamentoCreateArgs} args - Arguments to create a Agendamento.
     * @example
     * // Create one Agendamento
     * const Agendamento = await prisma.agendamento.create({
     *   data: {
     *     // ... data to create a Agendamento
     *   }
     * })
     * 
     */
    create<T extends AgendamentoCreateArgs>(args: SelectSubset<T, AgendamentoCreateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendamentos.
     * @param {AgendamentoCreateManyArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendamentoCreateManyArgs>(args?: SelectSubset<T, AgendamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agendamentos and returns the data saved in the database.
     * @param {AgendamentoCreateManyAndReturnArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agendamentos and only return the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agendamento.
     * @param {AgendamentoDeleteArgs} args - Arguments to delete one Agendamento.
     * @example
     * // Delete one Agendamento
     * const Agendamento = await prisma.agendamento.delete({
     *   where: {
     *     // ... filter to delete one Agendamento
     *   }
     * })
     * 
     */
    delete<T extends AgendamentoDeleteArgs>(args: SelectSubset<T, AgendamentoDeleteArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendamento.
     * @param {AgendamentoUpdateArgs} args - Arguments to update one Agendamento.
     * @example
     * // Update one Agendamento
     * const agendamento = await prisma.agendamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendamentoUpdateArgs>(args: SelectSubset<T, AgendamentoUpdateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendamentos.
     * @param {AgendamentoDeleteManyArgs} args - Arguments to filter Agendamentos to delete.
     * @example
     * // Delete a few Agendamentos
     * const { count } = await prisma.agendamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendamentoDeleteManyArgs>(args?: SelectSubset<T, AgendamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendamentoUpdateManyArgs>(args: SelectSubset<T, AgendamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos and returns the data updated in the database.
     * @param {AgendamentoUpdateManyAndReturnArgs} args - Arguments to update many Agendamentos.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agendamentos and only return the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgendamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agendamento.
     * @param {AgendamentoUpsertArgs} args - Arguments to update or create a Agendamento.
     * @example
     * // Update or create a Agendamento
     * const agendamento = await prisma.agendamento.upsert({
     *   create: {
     *     // ... data to create a Agendamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamento we want to update
     *   }
     * })
     */
    upsert<T extends AgendamentoUpsertArgs>(args: SelectSubset<T, AgendamentoUpsertArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoCountArgs} args - Arguments to filter Agendamentos to count.
     * @example
     * // Count the number of Agendamentos
     * const count = await prisma.agendamento.count({
     *   where: {
     *     // ... the filter for the Agendamentos we want to count
     *   }
     * })
    **/
    count<T extends AgendamentoCountArgs>(
      args?: Subset<T, AgendamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgendamentoAggregateArgs>(args: Subset<T, AgendamentoAggregateArgs>): Prisma.PrismaPromise<GetAgendamentoAggregateType<T>>

    /**
     * Group by Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgendamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendamentoGroupByArgs['orderBy'] }
        : { orderBy?: AgendamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgendamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agendamento model
   */
  readonly fields: AgendamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agendamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profissional<T extends ProfissionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalDefaultArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agendamento model
   */
  interface AgendamentoFieldRefs {
    readonly id: FieldRef<"Agendamento", 'String'>
    readonly clienteId: FieldRef<"Agendamento", 'String'>
    readonly profissionalId: FieldRef<"Agendamento", 'String'>
    readonly servicoId: FieldRef<"Agendamento", 'String'>
    readonly data_hora: FieldRef<"Agendamento", 'DateTime'>
    readonly status: FieldRef<"Agendamento", 'String'>
    readonly createdAt: FieldRef<"Agendamento", 'DateTime'>
    readonly updatedAt: FieldRef<"Agendamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agendamento findUnique
   */
  export type AgendamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findUniqueOrThrow
   */
  export type AgendamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findFirst
   */
  export type AgendamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findFirstOrThrow
   */
  export type AgendamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findMany
   */
  export type AgendamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento create
   */
  export type AgendamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Agendamento.
     */
    data: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
  }

  /**
   * Agendamento createMany
   */
  export type AgendamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agendamento createManyAndReturn
   */
  export type AgendamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento update
   */
  export type AgendamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Agendamento.
     */
    data: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
    /**
     * Choose, which Agendamento to update.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento updateMany
   */
  export type AgendamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
  }

  /**
   * Agendamento updateManyAndReturn
   */
  export type AgendamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento upsert
   */
  export type AgendamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Agendamento to update in case it exists.
     */
    where: AgendamentoWhereUniqueInput
    /**
     * In case the Agendamento found by the `where` argument doesn't exist, create a new Agendamento with this data.
     */
    create: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
    /**
     * In case the Agendamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
  }

  /**
   * Agendamento delete
   */
  export type AgendamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter which Agendamento to delete.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento deleteMany
   */
  export type AgendamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamentos to delete
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to delete.
     */
    limit?: number
  }

  /**
   * Agendamento without action
   */
  export type AgendamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
  }


  /**
   * Model Financeiro
   */

  export type AggregateFinanceiro = {
    _count: FinanceiroCountAggregateOutputType | null
    _avg: FinanceiroAvgAggregateOutputType | null
    _sum: FinanceiroSumAggregateOutputType | null
    _min: FinanceiroMinAggregateOutputType | null
    _max: FinanceiroMaxAggregateOutputType | null
  }

  export type FinanceiroAvgAggregateOutputType = {
    valor: number | null
  }

  export type FinanceiroSumAggregateOutputType = {
    valor: number | null
  }

  export type FinanceiroMinAggregateOutputType = {
    id: string | null
    tipo: string | null
    descricao: string | null
    valor: number | null
    data: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinanceiroMaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    descricao: string | null
    valor: number | null
    data: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinanceiroCountAggregateOutputType = {
    id: number
    tipo: number
    descricao: number
    valor: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinanceiroAvgAggregateInputType = {
    valor?: true
  }

  export type FinanceiroSumAggregateInputType = {
    valor?: true
  }

  export type FinanceiroMinAggregateInputType = {
    id?: true
    tipo?: true
    descricao?: true
    valor?: true
    data?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinanceiroMaxAggregateInputType = {
    id?: true
    tipo?: true
    descricao?: true
    valor?: true
    data?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinanceiroCountAggregateInputType = {
    id?: true
    tipo?: true
    descricao?: true
    valor?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinanceiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Financeiro to aggregate.
     */
    where?: FinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financeiros to fetch.
     */
    orderBy?: FinanceiroOrderByWithRelationInput | FinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financeiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Financeiros
    **/
    _count?: true | FinanceiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceiroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceiroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceiroMaxAggregateInputType
  }

  export type GetFinanceiroAggregateType<T extends FinanceiroAggregateArgs> = {
        [P in keyof T & keyof AggregateFinanceiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinanceiro[P]>
      : GetScalarType<T[P], AggregateFinanceiro[P]>
  }




  export type FinanceiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceiroWhereInput
    orderBy?: FinanceiroOrderByWithAggregationInput | FinanceiroOrderByWithAggregationInput[]
    by: FinanceiroScalarFieldEnum[] | FinanceiroScalarFieldEnum
    having?: FinanceiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceiroCountAggregateInputType | true
    _avg?: FinanceiroAvgAggregateInputType
    _sum?: FinanceiroSumAggregateInputType
    _min?: FinanceiroMinAggregateInputType
    _max?: FinanceiroMaxAggregateInputType
  }

  export type FinanceiroGroupByOutputType = {
    id: string
    tipo: string
    descricao: string
    valor: number
    data: Date
    createdAt: Date
    updatedAt: Date
    _count: FinanceiroCountAggregateOutputType | null
    _avg: FinanceiroAvgAggregateOutputType | null
    _sum: FinanceiroSumAggregateOutputType | null
    _min: FinanceiroMinAggregateOutputType | null
    _max: FinanceiroMaxAggregateOutputType | null
  }

  type GetFinanceiroGroupByPayload<T extends FinanceiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceiroGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceiroGroupByOutputType[P]>
        }
      >
    >


  export type FinanceiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descricao?: boolean
    valor?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["financeiro"]>

  export type FinanceiroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descricao?: boolean
    valor?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["financeiro"]>

  export type FinanceiroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descricao?: boolean
    valor?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["financeiro"]>

  export type FinanceiroSelectScalar = {
    id?: boolean
    tipo?: boolean
    descricao?: boolean
    valor?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinanceiroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "descricao" | "valor" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["financeiro"]>

  export type $FinanceiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Financeiro"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      descricao: string
      valor: number
      data: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["financeiro"]>
    composites: {}
  }

  type FinanceiroGetPayload<S extends boolean | null | undefined | FinanceiroDefaultArgs> = $Result.GetResult<Prisma.$FinanceiroPayload, S>

  type FinanceiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinanceiroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinanceiroCountAggregateInputType | true
    }

  export interface FinanceiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Financeiro'], meta: { name: 'Financeiro' } }
    /**
     * Find zero or one Financeiro that matches the filter.
     * @param {FinanceiroFindUniqueArgs} args - Arguments to find a Financeiro
     * @example
     * // Get one Financeiro
     * const financeiro = await prisma.financeiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceiroFindUniqueArgs>(args: SelectSubset<T, FinanceiroFindUniqueArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Financeiro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinanceiroFindUniqueOrThrowArgs} args - Arguments to find a Financeiro
     * @example
     * // Get one Financeiro
     * const financeiro = await prisma.financeiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceiroFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Financeiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroFindFirstArgs} args - Arguments to find a Financeiro
     * @example
     * // Get one Financeiro
     * const financeiro = await prisma.financeiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceiroFindFirstArgs>(args?: SelectSubset<T, FinanceiroFindFirstArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Financeiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroFindFirstOrThrowArgs} args - Arguments to find a Financeiro
     * @example
     * // Get one Financeiro
     * const financeiro = await prisma.financeiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceiroFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Financeiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Financeiros
     * const financeiros = await prisma.financeiro.findMany()
     * 
     * // Get first 10 Financeiros
     * const financeiros = await prisma.financeiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeiroWithIdOnly = await prisma.financeiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinanceiroFindManyArgs>(args?: SelectSubset<T, FinanceiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Financeiro.
     * @param {FinanceiroCreateArgs} args - Arguments to create a Financeiro.
     * @example
     * // Create one Financeiro
     * const Financeiro = await prisma.financeiro.create({
     *   data: {
     *     // ... data to create a Financeiro
     *   }
     * })
     * 
     */
    create<T extends FinanceiroCreateArgs>(args: SelectSubset<T, FinanceiroCreateArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Financeiros.
     * @param {FinanceiroCreateManyArgs} args - Arguments to create many Financeiros.
     * @example
     * // Create many Financeiros
     * const financeiro = await prisma.financeiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceiroCreateManyArgs>(args?: SelectSubset<T, FinanceiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Financeiros and returns the data saved in the database.
     * @param {FinanceiroCreateManyAndReturnArgs} args - Arguments to create many Financeiros.
     * @example
     * // Create many Financeiros
     * const financeiro = await prisma.financeiro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Financeiros and only return the `id`
     * const financeiroWithIdOnly = await prisma.financeiro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceiroCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceiroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Financeiro.
     * @param {FinanceiroDeleteArgs} args - Arguments to delete one Financeiro.
     * @example
     * // Delete one Financeiro
     * const Financeiro = await prisma.financeiro.delete({
     *   where: {
     *     // ... filter to delete one Financeiro
     *   }
     * })
     * 
     */
    delete<T extends FinanceiroDeleteArgs>(args: SelectSubset<T, FinanceiroDeleteArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Financeiro.
     * @param {FinanceiroUpdateArgs} args - Arguments to update one Financeiro.
     * @example
     * // Update one Financeiro
     * const financeiro = await prisma.financeiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceiroUpdateArgs>(args: SelectSubset<T, FinanceiroUpdateArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Financeiros.
     * @param {FinanceiroDeleteManyArgs} args - Arguments to filter Financeiros to delete.
     * @example
     * // Delete a few Financeiros
     * const { count } = await prisma.financeiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceiroDeleteManyArgs>(args?: SelectSubset<T, FinanceiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Financeiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Financeiros
     * const financeiro = await prisma.financeiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceiroUpdateManyArgs>(args: SelectSubset<T, FinanceiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Financeiros and returns the data updated in the database.
     * @param {FinanceiroUpdateManyAndReturnArgs} args - Arguments to update many Financeiros.
     * @example
     * // Update many Financeiros
     * const financeiro = await prisma.financeiro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Financeiros and only return the `id`
     * const financeiroWithIdOnly = await prisma.financeiro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinanceiroUpdateManyAndReturnArgs>(args: SelectSubset<T, FinanceiroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Financeiro.
     * @param {FinanceiroUpsertArgs} args - Arguments to update or create a Financeiro.
     * @example
     * // Update or create a Financeiro
     * const financeiro = await prisma.financeiro.upsert({
     *   create: {
     *     // ... data to create a Financeiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Financeiro we want to update
     *   }
     * })
     */
    upsert<T extends FinanceiroUpsertArgs>(args: SelectSubset<T, FinanceiroUpsertArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Financeiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroCountArgs} args - Arguments to filter Financeiros to count.
     * @example
     * // Count the number of Financeiros
     * const count = await prisma.financeiro.count({
     *   where: {
     *     // ... the filter for the Financeiros we want to count
     *   }
     * })
    **/
    count<T extends FinanceiroCountArgs>(
      args?: Subset<T, FinanceiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Financeiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinanceiroAggregateArgs>(args: Subset<T, FinanceiroAggregateArgs>): Prisma.PrismaPromise<GetFinanceiroAggregateType<T>>

    /**
     * Group by Financeiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinanceiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceiroGroupByArgs['orderBy'] }
        : { orderBy?: FinanceiroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinanceiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Financeiro model
   */
  readonly fields: FinanceiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Financeiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Financeiro model
   */
  interface FinanceiroFieldRefs {
    readonly id: FieldRef<"Financeiro", 'String'>
    readonly tipo: FieldRef<"Financeiro", 'String'>
    readonly descricao: FieldRef<"Financeiro", 'String'>
    readonly valor: FieldRef<"Financeiro", 'Float'>
    readonly data: FieldRef<"Financeiro", 'DateTime'>
    readonly createdAt: FieldRef<"Financeiro", 'DateTime'>
    readonly updatedAt: FieldRef<"Financeiro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Financeiro findUnique
   */
  export type FinanceiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Filter, which Financeiro to fetch.
     */
    where: FinanceiroWhereUniqueInput
  }

  /**
   * Financeiro findUniqueOrThrow
   */
  export type FinanceiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Filter, which Financeiro to fetch.
     */
    where: FinanceiroWhereUniqueInput
  }

  /**
   * Financeiro findFirst
   */
  export type FinanceiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Filter, which Financeiro to fetch.
     */
    where?: FinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financeiros to fetch.
     */
    orderBy?: FinanceiroOrderByWithRelationInput | FinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Financeiros.
     */
    cursor?: FinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financeiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Financeiros.
     */
    distinct?: FinanceiroScalarFieldEnum | FinanceiroScalarFieldEnum[]
  }

  /**
   * Financeiro findFirstOrThrow
   */
  export type FinanceiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Filter, which Financeiro to fetch.
     */
    where?: FinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financeiros to fetch.
     */
    orderBy?: FinanceiroOrderByWithRelationInput | FinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Financeiros.
     */
    cursor?: FinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financeiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Financeiros.
     */
    distinct?: FinanceiroScalarFieldEnum | FinanceiroScalarFieldEnum[]
  }

  /**
   * Financeiro findMany
   */
  export type FinanceiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Filter, which Financeiros to fetch.
     */
    where?: FinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financeiros to fetch.
     */
    orderBy?: FinanceiroOrderByWithRelationInput | FinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Financeiros.
     */
    cursor?: FinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financeiros.
     */
    skip?: number
    distinct?: FinanceiroScalarFieldEnum | FinanceiroScalarFieldEnum[]
  }

  /**
   * Financeiro create
   */
  export type FinanceiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * The data needed to create a Financeiro.
     */
    data: XOR<FinanceiroCreateInput, FinanceiroUncheckedCreateInput>
  }

  /**
   * Financeiro createMany
   */
  export type FinanceiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Financeiros.
     */
    data: FinanceiroCreateManyInput | FinanceiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Financeiro createManyAndReturn
   */
  export type FinanceiroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * The data used to create many Financeiros.
     */
    data: FinanceiroCreateManyInput | FinanceiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Financeiro update
   */
  export type FinanceiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * The data needed to update a Financeiro.
     */
    data: XOR<FinanceiroUpdateInput, FinanceiroUncheckedUpdateInput>
    /**
     * Choose, which Financeiro to update.
     */
    where: FinanceiroWhereUniqueInput
  }

  /**
   * Financeiro updateMany
   */
  export type FinanceiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Financeiros.
     */
    data: XOR<FinanceiroUpdateManyMutationInput, FinanceiroUncheckedUpdateManyInput>
    /**
     * Filter which Financeiros to update
     */
    where?: FinanceiroWhereInput
    /**
     * Limit how many Financeiros to update.
     */
    limit?: number
  }

  /**
   * Financeiro updateManyAndReturn
   */
  export type FinanceiroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * The data used to update Financeiros.
     */
    data: XOR<FinanceiroUpdateManyMutationInput, FinanceiroUncheckedUpdateManyInput>
    /**
     * Filter which Financeiros to update
     */
    where?: FinanceiroWhereInput
    /**
     * Limit how many Financeiros to update.
     */
    limit?: number
  }

  /**
   * Financeiro upsert
   */
  export type FinanceiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * The filter to search for the Financeiro to update in case it exists.
     */
    where: FinanceiroWhereUniqueInput
    /**
     * In case the Financeiro found by the `where` argument doesn't exist, create a new Financeiro with this data.
     */
    create: XOR<FinanceiroCreateInput, FinanceiroUncheckedCreateInput>
    /**
     * In case the Financeiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceiroUpdateInput, FinanceiroUncheckedUpdateInput>
  }

  /**
   * Financeiro delete
   */
  export type FinanceiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Filter which Financeiro to delete.
     */
    where: FinanceiroWhereUniqueInput
  }

  /**
   * Financeiro deleteMany
   */
  export type FinanceiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Financeiros to delete
     */
    where?: FinanceiroWhereInput
    /**
     * Limit how many Financeiros to delete.
     */
    limit?: number
  }

  /**
   * Financeiro without action
   */
  export type FinanceiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    tipo: 'tipo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telefone: 'telefone',
    observacoes: 'observacoes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ProfissionalScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    especialidade: 'especialidade',
    comissao: 'comissao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfissionalScalarFieldEnum = (typeof ProfissionalScalarFieldEnum)[keyof typeof ProfissionalScalarFieldEnum]


  export const ServicoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    preco: 'preco',
    duracao: 'duracao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServicoScalarFieldEnum = (typeof ServicoScalarFieldEnum)[keyof typeof ServicoScalarFieldEnum]


  export const AgendamentoScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    profissionalId: 'profissionalId',
    servicoId: 'servicoId',
    data_hora: 'data_hora',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgendamentoScalarFieldEnum = (typeof AgendamentoScalarFieldEnum)[keyof typeof AgendamentoScalarFieldEnum]


  export const FinanceiroScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    descricao: 'descricao',
    valor: 'valor',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinanceiroScalarFieldEnum = (typeof FinanceiroScalarFieldEnum)[keyof typeof FinanceiroScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipo?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipo?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    tipo?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    observacoes?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    agendamentos?: AgendamentoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agendamentos?: AgendamentoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    observacoes?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    agendamentos?: AgendamentoListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    observacoes?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type ProfissionalWhereInput = {
    AND?: ProfissionalWhereInput | ProfissionalWhereInput[]
    OR?: ProfissionalWhereInput[]
    NOT?: ProfissionalWhereInput | ProfissionalWhereInput[]
    id?: StringFilter<"Profissional"> | string
    nome?: StringFilter<"Profissional"> | string
    especialidade?: StringFilter<"Profissional"> | string
    comissao?: FloatFilter<"Profissional"> | number
    createdAt?: DateTimeFilter<"Profissional"> | Date | string
    updatedAt?: DateTimeFilter<"Profissional"> | Date | string
    agendamentos?: AgendamentoListRelationFilter
  }

  export type ProfissionalOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    comissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agendamentos?: AgendamentoOrderByRelationAggregateInput
  }

  export type ProfissionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfissionalWhereInput | ProfissionalWhereInput[]
    OR?: ProfissionalWhereInput[]
    NOT?: ProfissionalWhereInput | ProfissionalWhereInput[]
    nome?: StringFilter<"Profissional"> | string
    especialidade?: StringFilter<"Profissional"> | string
    comissao?: FloatFilter<"Profissional"> | number
    createdAt?: DateTimeFilter<"Profissional"> | Date | string
    updatedAt?: DateTimeFilter<"Profissional"> | Date | string
    agendamentos?: AgendamentoListRelationFilter
  }, "id">

  export type ProfissionalOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    comissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfissionalCountOrderByAggregateInput
    _avg?: ProfissionalAvgOrderByAggregateInput
    _max?: ProfissionalMaxOrderByAggregateInput
    _min?: ProfissionalMinOrderByAggregateInput
    _sum?: ProfissionalSumOrderByAggregateInput
  }

  export type ProfissionalScalarWhereWithAggregatesInput = {
    AND?: ProfissionalScalarWhereWithAggregatesInput | ProfissionalScalarWhereWithAggregatesInput[]
    OR?: ProfissionalScalarWhereWithAggregatesInput[]
    NOT?: ProfissionalScalarWhereWithAggregatesInput | ProfissionalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profissional"> | string
    nome?: StringWithAggregatesFilter<"Profissional"> | string
    especialidade?: StringWithAggregatesFilter<"Profissional"> | string
    comissao?: FloatWithAggregatesFilter<"Profissional"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Profissional"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profissional"> | Date | string
  }

  export type ServicoWhereInput = {
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id?: StringFilter<"Servico"> | string
    nome?: StringFilter<"Servico"> | string
    preco?: FloatFilter<"Servico"> | number
    duracao?: IntFilter<"Servico"> | number
    createdAt?: DateTimeFilter<"Servico"> | Date | string
    updatedAt?: DateTimeFilter<"Servico"> | Date | string
    agendamentos?: AgendamentoListRelationFilter
  }

  export type ServicoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    duracao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agendamentos?: AgendamentoOrderByRelationAggregateInput
  }

  export type ServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    nome?: StringFilter<"Servico"> | string
    preco?: FloatFilter<"Servico"> | number
    duracao?: IntFilter<"Servico"> | number
    createdAt?: DateTimeFilter<"Servico"> | Date | string
    updatedAt?: DateTimeFilter<"Servico"> | Date | string
    agendamentos?: AgendamentoListRelationFilter
  }, "id">

  export type ServicoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    duracao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServicoCountOrderByAggregateInput
    _avg?: ServicoAvgOrderByAggregateInput
    _max?: ServicoMaxOrderByAggregateInput
    _min?: ServicoMinOrderByAggregateInput
    _sum?: ServicoSumOrderByAggregateInput
  }

  export type ServicoScalarWhereWithAggregatesInput = {
    AND?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    OR?: ServicoScalarWhereWithAggregatesInput[]
    NOT?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Servico"> | string
    nome?: StringWithAggregatesFilter<"Servico"> | string
    preco?: FloatWithAggregatesFilter<"Servico"> | number
    duracao?: IntWithAggregatesFilter<"Servico"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Servico"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Servico"> | Date | string
  }

  export type AgendamentoWhereInput = {
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    id?: StringFilter<"Agendamento"> | string
    clienteId?: StringFilter<"Agendamento"> | string
    profissionalId?: StringFilter<"Agendamento"> | string
    servicoId?: StringFilter<"Agendamento"> | string
    data_hora?: DateTimeFilter<"Agendamento"> | Date | string
    status?: StringFilter<"Agendamento"> | string
    createdAt?: DateTimeFilter<"Agendamento"> | Date | string
    updatedAt?: DateTimeFilter<"Agendamento"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }

  export type AgendamentoOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
    servicoId?: SortOrder
    data_hora?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    profissional?: ProfissionalOrderByWithRelationInput
    servico?: ServicoOrderByWithRelationInput
  }

  export type AgendamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    clienteId?: StringFilter<"Agendamento"> | string
    profissionalId?: StringFilter<"Agendamento"> | string
    servicoId?: StringFilter<"Agendamento"> | string
    data_hora?: DateTimeFilter<"Agendamento"> | Date | string
    status?: StringFilter<"Agendamento"> | string
    createdAt?: DateTimeFilter<"Agendamento"> | Date | string
    updatedAt?: DateTimeFilter<"Agendamento"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }, "id">

  export type AgendamentoOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
    servicoId?: SortOrder
    data_hora?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgendamentoCountOrderByAggregateInput
    _max?: AgendamentoMaxOrderByAggregateInput
    _min?: AgendamentoMinOrderByAggregateInput
  }

  export type AgendamentoScalarWhereWithAggregatesInput = {
    AND?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    OR?: AgendamentoScalarWhereWithAggregatesInput[]
    NOT?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agendamento"> | string
    clienteId?: StringWithAggregatesFilter<"Agendamento"> | string
    profissionalId?: StringWithAggregatesFilter<"Agendamento"> | string
    servicoId?: StringWithAggregatesFilter<"Agendamento"> | string
    data_hora?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    status?: StringWithAggregatesFilter<"Agendamento"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
  }

  export type FinanceiroWhereInput = {
    AND?: FinanceiroWhereInput | FinanceiroWhereInput[]
    OR?: FinanceiroWhereInput[]
    NOT?: FinanceiroWhereInput | FinanceiroWhereInput[]
    id?: StringFilter<"Financeiro"> | string
    tipo?: StringFilter<"Financeiro"> | string
    descricao?: StringFilter<"Financeiro"> | string
    valor?: FloatFilter<"Financeiro"> | number
    data?: DateTimeFilter<"Financeiro"> | Date | string
    createdAt?: DateTimeFilter<"Financeiro"> | Date | string
    updatedAt?: DateTimeFilter<"Financeiro"> | Date | string
  }

  export type FinanceiroOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceiroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinanceiroWhereInput | FinanceiroWhereInput[]
    OR?: FinanceiroWhereInput[]
    NOT?: FinanceiroWhereInput | FinanceiroWhereInput[]
    tipo?: StringFilter<"Financeiro"> | string
    descricao?: StringFilter<"Financeiro"> | string
    valor?: FloatFilter<"Financeiro"> | number
    data?: DateTimeFilter<"Financeiro"> | Date | string
    createdAt?: DateTimeFilter<"Financeiro"> | Date | string
    updatedAt?: DateTimeFilter<"Financeiro"> | Date | string
  }, "id">

  export type FinanceiroOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinanceiroCountOrderByAggregateInput
    _avg?: FinanceiroAvgOrderByAggregateInput
    _max?: FinanceiroMaxOrderByAggregateInput
    _min?: FinanceiroMinOrderByAggregateInput
    _sum?: FinanceiroSumOrderByAggregateInput
  }

  export type FinanceiroScalarWhereWithAggregatesInput = {
    AND?: FinanceiroScalarWhereWithAggregatesInput | FinanceiroScalarWhereWithAggregatesInput[]
    OR?: FinanceiroScalarWhereWithAggregatesInput[]
    NOT?: FinanceiroScalarWhereWithAggregatesInput | FinanceiroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Financeiro"> | string
    tipo?: StringWithAggregatesFilter<"Financeiro"> | string
    descricao?: StringWithAggregatesFilter<"Financeiro"> | string
    valor?: FloatWithAggregatesFilter<"Financeiro"> | number
    data?: DateTimeWithAggregatesFilter<"Financeiro"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Financeiro"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Financeiro"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    tipo?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    tipo?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    tipo?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    id?: string
    nome: string
    telefone: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nome: string
    telefone: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nome: string
    telefone: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfissionalCreateInput = {
    id?: string
    nome: string
    especialidade: string
    comissao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateInput = {
    id?: string
    nome: string
    especialidade: string
    comissao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    comissao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    comissao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalCreateManyInput = {
    id?: string
    nome: string
    especialidade: string
    comissao: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfissionalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    comissao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfissionalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    comissao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoCreateInput = {
    id?: string
    nome: string
    preco: number
    duracao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateInput = {
    id?: string
    nome: string
    preco: number
    duracao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ServicoCreateManyInput = {
    id?: string
    nome: string
    preco: number
    duracao: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoCreateInput = {
    id?: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutAgendamentosInput
    profissional: ProfissionalCreateNestedOneWithoutAgendamentosInput
    servico: ServicoCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateInput = {
    id?: string
    clienteId: string
    profissionalId: string
    servicoId: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutAgendamentosNestedInput
    profissional?: ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput
    servico?: ServicoUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    servicoId?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoCreateManyInput = {
    id?: string
    clienteId: string
    profissionalId: string
    servicoId: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    servicoId?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceiroCreateInput = {
    id?: string
    tipo: string
    descricao: string
    valor: number
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceiroUncheckedCreateInput = {
    id?: string
    tipo: string
    descricao: string
    valor: number
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceiroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceiroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceiroCreateManyInput = {
    id?: string
    tipo: string
    descricao: string
    valor: number
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceiroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceiroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AgendamentoListRelationFilter = {
    every?: AgendamentoWhereInput
    some?: AgendamentoWhereInput
    none?: AgendamentoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgendamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProfissionalCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    comissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfissionalAvgOrderByAggregateInput = {
    comissao?: SortOrder
  }

  export type ProfissionalMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    comissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfissionalMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    comissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfissionalSumOrderByAggregateInput = {
    comissao?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ServicoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    duracao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicoAvgOrderByAggregateInput = {
    preco?: SortOrder
    duracao?: SortOrder
  }

  export type ServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    duracao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    duracao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicoSumOrderByAggregateInput = {
    preco?: SortOrder
    duracao?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type ProfissionalScalarRelationFilter = {
    is?: ProfissionalWhereInput
    isNot?: ProfissionalWhereInput
  }

  export type ServicoScalarRelationFilter = {
    is?: ServicoWhereInput
    isNot?: ServicoWhereInput
  }

  export type AgendamentoCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
    servicoId?: SortOrder
    data_hora?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
    servicoId?: SortOrder
    data_hora?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendamentoMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
    servicoId?: SortOrder
    data_hora?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceiroCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceiroAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type FinanceiroMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceiroMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceiroSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AgendamentoCreateNestedManyWithoutClienteInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type AgendamentoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AgendamentoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutClienteInput | AgendamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutClienteInput | AgendamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutClienteInput | AgendamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type AgendamentoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutClienteInput | AgendamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutClienteInput | AgendamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutClienteInput | AgendamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type AgendamentoCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput> | AgendamentoCreateWithoutProfissionalInput[] | AgendamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutProfissionalInput | AgendamentoCreateOrConnectWithoutProfissionalInput[]
    createMany?: AgendamentoCreateManyProfissionalInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type AgendamentoUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput> | AgendamentoCreateWithoutProfissionalInput[] | AgendamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutProfissionalInput | AgendamentoCreateOrConnectWithoutProfissionalInput[]
    createMany?: AgendamentoCreateManyProfissionalInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgendamentoUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput> | AgendamentoCreateWithoutProfissionalInput[] | AgendamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutProfissionalInput | AgendamentoCreateOrConnectWithoutProfissionalInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutProfissionalInput | AgendamentoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: AgendamentoCreateManyProfissionalInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutProfissionalInput | AgendamentoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutProfissionalInput | AgendamentoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type AgendamentoUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput> | AgendamentoCreateWithoutProfissionalInput[] | AgendamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutProfissionalInput | AgendamentoCreateOrConnectWithoutProfissionalInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutProfissionalInput | AgendamentoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: AgendamentoCreateManyProfissionalInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutProfissionalInput | AgendamentoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutProfissionalInput | AgendamentoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type AgendamentoCreateNestedManyWithoutServicoInput = {
    create?: XOR<AgendamentoCreateWithoutServicoInput, AgendamentoUncheckedCreateWithoutServicoInput> | AgendamentoCreateWithoutServicoInput[] | AgendamentoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutServicoInput | AgendamentoCreateOrConnectWithoutServicoInput[]
    createMany?: AgendamentoCreateManyServicoInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type AgendamentoUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<AgendamentoCreateWithoutServicoInput, AgendamentoUncheckedCreateWithoutServicoInput> | AgendamentoCreateWithoutServicoInput[] | AgendamentoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutServicoInput | AgendamentoCreateOrConnectWithoutServicoInput[]
    createMany?: AgendamentoCreateManyServicoInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgendamentoUpdateManyWithoutServicoNestedInput = {
    create?: XOR<AgendamentoCreateWithoutServicoInput, AgendamentoUncheckedCreateWithoutServicoInput> | AgendamentoCreateWithoutServicoInput[] | AgendamentoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutServicoInput | AgendamentoCreateOrConnectWithoutServicoInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutServicoInput | AgendamentoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: AgendamentoCreateManyServicoInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutServicoInput | AgendamentoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutServicoInput | AgendamentoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type AgendamentoUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<AgendamentoCreateWithoutServicoInput, AgendamentoUncheckedCreateWithoutServicoInput> | AgendamentoCreateWithoutServicoInput[] | AgendamentoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutServicoInput | AgendamentoCreateOrConnectWithoutServicoInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutServicoInput | AgendamentoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: AgendamentoCreateManyServicoInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutServicoInput | AgendamentoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutServicoInput | AgendamentoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAgendamentosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ProfissionalCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutAgendamentosInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type ServicoCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<ServicoCreateWithoutAgendamentosInput, ServicoUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutAgendamentosInput
    connect?: ServicoWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAgendamentosInput
    upsert?: ClienteUpsertWithoutAgendamentosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutAgendamentosInput, ClienteUpdateWithoutAgendamentosInput>, ClienteUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutAgendamentosInput
    upsert?: ProfissionalUpsertWithoutAgendamentosInput
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutAgendamentosInput, ProfissionalUpdateWithoutAgendamentosInput>, ProfissionalUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ServicoUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<ServicoCreateWithoutAgendamentosInput, ServicoUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutAgendamentosInput
    upsert?: ServicoUpsertWithoutAgendamentosInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutAgendamentosInput, ServicoUpdateWithoutAgendamentosInput>, ServicoUncheckedUpdateWithoutAgendamentosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AgendamentoCreateWithoutClienteInput = {
    id?: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profissional: ProfissionalCreateNestedOneWithoutAgendamentosInput
    servico: ServicoCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateWithoutClienteInput = {
    id?: string
    profissionalId: string
    servicoId: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoCreateOrConnectWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput>
  }

  export type AgendamentoCreateManyClienteInputEnvelope = {
    data: AgendamentoCreateManyClienteInput | AgendamentoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoUpsertWithWhereUniqueWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    update: XOR<AgendamentoUpdateWithoutClienteInput, AgendamentoUncheckedUpdateWithoutClienteInput>
    create: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput>
  }

  export type AgendamentoUpdateWithWhereUniqueWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    data: XOR<AgendamentoUpdateWithoutClienteInput, AgendamentoUncheckedUpdateWithoutClienteInput>
  }

  export type AgendamentoUpdateManyWithWhereWithoutClienteInput = {
    where: AgendamentoScalarWhereInput
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyWithoutClienteInput>
  }

  export type AgendamentoScalarWhereInput = {
    AND?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    OR?: AgendamentoScalarWhereInput[]
    NOT?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    id?: StringFilter<"Agendamento"> | string
    clienteId?: StringFilter<"Agendamento"> | string
    profissionalId?: StringFilter<"Agendamento"> | string
    servicoId?: StringFilter<"Agendamento"> | string
    data_hora?: DateTimeFilter<"Agendamento"> | Date | string
    status?: StringFilter<"Agendamento"> | string
    createdAt?: DateTimeFilter<"Agendamento"> | Date | string
    updatedAt?: DateTimeFilter<"Agendamento"> | Date | string
  }

  export type AgendamentoCreateWithoutProfissionalInput = {
    id?: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutAgendamentosInput
    servico: ServicoCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateWithoutProfissionalInput = {
    id?: string
    clienteId: string
    servicoId: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoCreateOrConnectWithoutProfissionalInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput>
  }

  export type AgendamentoCreateManyProfissionalInputEnvelope = {
    data: AgendamentoCreateManyProfissionalInput | AgendamentoCreateManyProfissionalInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: AgendamentoWhereUniqueInput
    update: XOR<AgendamentoUpdateWithoutProfissionalInput, AgendamentoUncheckedUpdateWithoutProfissionalInput>
    create: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput>
  }

  export type AgendamentoUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: AgendamentoWhereUniqueInput
    data: XOR<AgendamentoUpdateWithoutProfissionalInput, AgendamentoUncheckedUpdateWithoutProfissionalInput>
  }

  export type AgendamentoUpdateManyWithWhereWithoutProfissionalInput = {
    where: AgendamentoScalarWhereInput
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type AgendamentoCreateWithoutServicoInput = {
    id?: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutAgendamentosInput
    profissional: ProfissionalCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateWithoutServicoInput = {
    id?: string
    clienteId: string
    profissionalId: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoCreateOrConnectWithoutServicoInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutServicoInput, AgendamentoUncheckedCreateWithoutServicoInput>
  }

  export type AgendamentoCreateManyServicoInputEnvelope = {
    data: AgendamentoCreateManyServicoInput | AgendamentoCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoUpsertWithWhereUniqueWithoutServicoInput = {
    where: AgendamentoWhereUniqueInput
    update: XOR<AgendamentoUpdateWithoutServicoInput, AgendamentoUncheckedUpdateWithoutServicoInput>
    create: XOR<AgendamentoCreateWithoutServicoInput, AgendamentoUncheckedCreateWithoutServicoInput>
  }

  export type AgendamentoUpdateWithWhereUniqueWithoutServicoInput = {
    where: AgendamentoWhereUniqueInput
    data: XOR<AgendamentoUpdateWithoutServicoInput, AgendamentoUncheckedUpdateWithoutServicoInput>
  }

  export type AgendamentoUpdateManyWithWhereWithoutServicoInput = {
    where: AgendamentoScalarWhereInput
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyWithoutServicoInput>
  }

  export type ClienteCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    telefone: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUncheckedCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    telefone: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteCreateOrConnectWithoutAgendamentosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
  }

  export type ProfissionalCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    especialidade: string
    comissao: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfissionalUncheckedCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    especialidade: string
    comissao: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfissionalCreateOrConnectWithoutAgendamentosInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
  }

  export type ServicoCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    preco: number
    duracao: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicoUncheckedCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    preco: number
    duracao: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicoCreateOrConnectWithoutAgendamentosInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutAgendamentosInput, ServicoUncheckedCreateWithoutAgendamentosInput>
  }

  export type ClienteUpsertWithoutAgendamentosInput = {
    update: XOR<ClienteUpdateWithoutAgendamentosInput, ClienteUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutAgendamentosInput, ClienteUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ClienteUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfissionalUpsertWithoutAgendamentosInput = {
    update: XOR<ProfissionalUpdateWithoutAgendamentosInput, ProfissionalUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutAgendamentosInput, ProfissionalUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ProfissionalUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    comissao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfissionalUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    comissao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoUpsertWithoutAgendamentosInput = {
    update: XOR<ServicoUpdateWithoutAgendamentosInput, ServicoUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<ServicoCreateWithoutAgendamentosInput, ServicoUncheckedCreateWithoutAgendamentosInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutAgendamentosInput, ServicoUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ServicoUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoCreateManyClienteInput = {
    id?: string
    profissionalId: string
    servicoId: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissional?: ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput
    servico?: ServicoUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    servicoId?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    servicoId?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoCreateManyProfissionalInput = {
    id?: string
    clienteId: string
    servicoId: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutAgendamentosNestedInput
    servico?: ServicoUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    servicoId?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUncheckedUpdateManyWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    servicoId?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoCreateManyServicoInput = {
    id?: string
    clienteId: string
    profissionalId: string
    data_hora: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoUpdateWithoutServicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutAgendamentosNestedInput
    profissional?: ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutServicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUncheckedUpdateManyWithoutServicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}