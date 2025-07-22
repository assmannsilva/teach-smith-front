export interface BulkInviteResponse {
    dispatched : number|null;
    errors: string[] |null;
    status: BulkInviteStatus
}

export type BulkInviteStatus = 'failed' | 'success' | 'partial';