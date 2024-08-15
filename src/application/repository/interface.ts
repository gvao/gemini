export interface SaveRepository<T> {
    save(item: T): Promise<void>;
}

export interface GetAllRepository<T> {
    getAll(): Promise<T[]>
}