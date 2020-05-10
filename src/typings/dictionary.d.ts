declare type Dictionary<T> = {
    [key in (string | number)]: T;
}
