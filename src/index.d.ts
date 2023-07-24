/**
 * Converts an Instance path to a string. Basically a fixed version of `Instance.GetFullName`.
 * @param instance The Instance to convert to a string.
 * @returns The path of the Instance.
 */
export function DirectoryToString(instance: Instance): string;

/**
 * The internal formatting mechanism of `Assert`, `Error`, and `Warn`.
 */
export function InspectFormat(formatString: string, ...formatArguments: ReadonlyArray<any>): string;

/**
 * Returns `Condition or Debug.Error(...)`.
 * @param condition The condition to assert.
 * @param formatString The format string.
 * @param formatArguments The format arguments.
 */
export declare function Assert<T>(
	condition: T,
	formatString: string,
	...formatArguments: ReadonlyArray<any>
): asserts condition;

/**
 * Standard RoStrap Erroring system. Prefixing ErrorMessage with '!' makes it expect
 * the `[error origin script].Name` as first parameter in `formatArguments`. Past the
 * initial Error string, subsequent arguments get unpacked in a string.format of the
 * error string. Assert falls back on Error. Error blames the latest item on the traceback
 * as the cause of the error. Error makes it clear which Library and function are
 * being misused.
 *
 * @param formatString The error string.
 * @param formatArguments What to format the error string with.
 */
export declare function Error(formatString: string, ...formatArguments: ReadonlyArray<any>): never;

/**
 * Functions the same as `Debug.Error`, but internally calls `warn` instead of `error`.
 * @param formatString The warning string.
 * @param formatArguments What to format the warning string with.
 */
export declare function Warn(formatString: string, ...formatArguments: ReadonlyArray<any>): void;

/**
 * Iteration function that iterates over a dictionary in alphabetical order. Dictionary is
 * that which will be iterated over in alphabetical order. Not case-sensitive.
 * @param dictionary The dictionary to iterate over.
 */
export declare function AlphabeticalOrder<V>(
	dictionary: ReadonlyMap<string, V>,
): IterableFunction<LuaTuple<[Exclude<string, undefined>, Exclude<V, undefined>]>>;
export declare function AlphabeticalOrder<T extends object>(
	dictionary: T,
): keyof T extends never
	? IterableFunction<LuaTuple<[unknown, defined]>>
	: IterableFunction<LuaTuple<[keyof T, Exclude<T[keyof T], undefined>]>>;

/**
 * Pretty self-explanatory. Table is the table to convert into a string. String TableName
 * puts `local TableName =` at the beginning. Multiline makes it multiline. Returns a
 * string-readable version of Table.
 *
 * @param object The table to convert to a string.
 * @param multiline Whether or not to make the string multiline.
 * @param tableName The name of the table.
 */
export declare function TableToString<T extends object>(object: T, multiline?: boolean, tableName?: string): string;

/**
 * Turns strings into Lua-readable format. Returns Objects location in
 * proper Lua format. Useful for when you are doing string-intensive
 * coding. Those minus signs are so tricky!
 *
 * @param value The string to escape.
 */
export declare function EscapeString(value: string): string;

/**
 * Returns a string representation of inspectArguments. Useful for debugging.
 * @param inspectArguments WHat you want to escape.
 */
export declare function Inspect(...inspectArguments: ReadonlyArray<any>): string;
