export declare class BranchService {
    private readonly pool;
    constructor();
    getCategoryByBranch(branchCode: string): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        status: number;
        error: any;
        data?: undefined;
    }>;
}
