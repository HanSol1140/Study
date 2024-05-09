import { Response } from 'express';
import { BranchService } from './branch.service';
export declare class BranchController {
    private readonly branchModel;
    constructor(branchModel: BranchService);
    getCategoryByBranch(branchCode: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
