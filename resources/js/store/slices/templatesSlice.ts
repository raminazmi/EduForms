import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Template {
    id: number;
    name: string;
    slug: string;
    description: string;
    category_id: number;
    structure: any;
    default_data: any;
    preview_image?: string;
    image_slots: number;
    has_barcode: boolean;
    orientation: 'portrait' | 'landscape';
    paper_size: string;
    is_premium: boolean;
    is_active: boolean;
    usage_count: number;
    category?: any;
}

interface TemplatesState {
    templates: Template[];
    categories: any[];
    selectedTemplate: Template | null;
    loading: boolean;
    filters: {
        category?: string;
        search?: string;
        premium?: boolean;
    };
}

const initialState: TemplatesState = {
    templates: [],
    categories: [],
    selectedTemplate: null,
    loading: false,
    filters: {},
};

const templatesSlice = createSlice({
    name: 'templates',
    initialState,
    reducers: {
        setTemplates: (state, action: PayloadAction<Template[]>) => {
            state.templates = action.payload;
        },
        setCategories: (state, action: PayloadAction<any[]>) => {
            state.categories = action.payload;
        },
        setSelectedTemplate: (state, action: PayloadAction<Template | null>) => {
            state.selectedTemplate = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setFilters: (state, action: PayloadAction<Partial<TemplatesState['filters']>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filters = {};
        },
    },
});

export const {
    setTemplates,
    setCategories,
    setSelectedTemplate,
    setLoading,
    setFilters,
    clearFilters,
} = templatesSlice.actions;

export default templatesSlice.reducer;