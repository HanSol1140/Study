"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
let BranchService = class BranchService {
    constructor() {
        this.pool = new pg_1.Pool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: Number(process.env.DB_PORT)
        });
    }
    async getCategoryByBranch(branchCode) {
        try {
            const categoryList = await this.pool.query(`
        SELECT
            mc.id, mc.menu_category_name, mc.menu_category_order, majc.major_category_name
        FROM
            menu_category mc
        JOIN
            major_category majc ON mc.parent_major_category_id = majc.id
        JOIN
            branch_category bc ON mc.id = bc.category_id
        JOIN
            branch b ON bc.branch_id = b.id
        WHERE
            b.branch_code = $1
        ORDER BY
            mc.menu_category_order`, [branchCode]);
            return { status: 200, data: categoryList.rows };
        }
        catch (error) {
            return { status: 400, error };
        }
    }
};
exports.BranchService = BranchService;
exports.BranchService = BranchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BranchService);
//# sourceMappingURL=branch.service.js.map