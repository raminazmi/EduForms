
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Report {
  id: string;
  title: string;
  type: 'student_performance' | 'attendance' | 'behavior' | 'academic' | 'financial';
  createdAt: string;
  status: 'draft' | 'completed' | 'published';
  data?: any;
}

interface ReportsState {
  reports: Report[];
  selectedReport: Report | null;
  loading: boolean;
  filters: {
    type?: string;
    status?: string;
    dateRange?: [string, string];
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
    selectReport: (state, action: PayloadAction<Report>) => {
      state.selectedReport = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<ReportsState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    addReport: (state, action: PayloadAction<Report>) => {
      state.reports.unshift(action.payload);
    },
  },
});

export const { setReports, selectReport, setLoading, setFilters, addReport } = reportsSlice.actions;
export default reportsSlice.reducer;
