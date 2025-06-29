import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Report {
    id: number;
    user_id: number;
    template_id: number;
    title: string;
    data: any;
    images?: string[];
    barcode_data?: string;
    status: 'draft' | 'completed';
    last_exported_at?: string;
    export_count: number;
    created_at: string;
    updated_at: string;
    template?: any;
}

interface ReportsState {
    reports: Report[];
    selectedReport: Report | null;
    loading: boolean;
    filters: {
        status?: string;
        template?: string;
        search?: string;
    };
}

const initialState: ReportsState = {
    reports: [],
    selectedReport: null,
    loading: false,
    filters: {},
};

const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        setReports: (state, action: PayloadAction<Report[]>) => {
            state.reports = action.payload;
        },
        addReport: (state, action: PayloadAction<Report>) => {
            state.reports.unshift(action.payload);
        },
        updateReport: (state, action: PayloadAction<Report>) => {
            const index = state.reports.findIndex(r => r.id === action.payload.id);
            if (index !== -1) {
                state.reports[index] = action.payload;
            }
        },
        deleteReport: (state, action: PayloadAction<number>) => {
            state.reports = state.reports.filter(r => r.id !== action.payload);
        },
        setSelectedReport: (state, action: PayloadAction<Report | null>) => {
            state.selectedReport = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setFilters: (state, action: PayloadAction<Partial<ReportsState['filters']>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filters = {};
        },
    },
});

export const {
    setReports,
    addReport,
    updateReport,
    deleteReport,
    setSelectedReport,
    setLoading,
    setFilters,
    clearFilters,
} = reportsSlice.actions;

export default reportsSlice.reducer;