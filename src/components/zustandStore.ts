import create from 'zustand';

interface FormField {
    addFieldVis: Boolean
    toggleAddFieldVis: (addFieldVis: Boolean) => void
    newField: Object
    setNewField: (newField: Boolean) => void
    settingsVis: Boolean
    toggleSettingsVis: (settingsVis: Boolean) => void
}

interface Sidebar {
    sidebarVis: Object,
    setSidebarVis: (SidebarVis: Object) => void
}

export const useFormVarsStore = create<FormField>((set) => ({

    addFieldVis: false,
    toggleAddFieldVis: (addFieldVis) => set(() => ({addFieldVis: addFieldVis})),

    newField: {
        fieldID: "",
        fieldType: "",
        fieldText: "",
        inputFieldName: "",
        required: false
    },
    setNewField: (newField) => set(() => ({newField: newField})),

    defaultClassLists: {
        Section: ["form-section", "p-5", "my-5", "w-full", "border", "rounded-xl", "shadow-sm", 'relative', 'text-center'],
    },  

    settingsVis: true,
    toggleSettingsVis: (settingsVis) => set(() => ({settingsVis: settingsVis})),
}))

export const useSectionStore = create((set) => ({
    sectionSettingsVis: false,
    toggleSectionSettingsVis: (sectionSettingsVis) => set(() => ({sectionSettingsVis: sectionSettingsVis})),

    sectionSelected: "",
    setSectionSelected: (sectionSelected) => set(() => ({sectionSelected: sectionSelected})),
    
    changeSectionName: "",
    setChangeSectionName: (changeSectionName) => set(() => ({changeSectionName : changeSectionName})),
    
}))

export const formDataStore = create((set) => ({
    rawCSS: "",
    setRawCSS: (rawCSS) => set(() => ({rawCSS: rawCSS})),
}))

export const useSidebarStore = create<Sidebar>((set) => ({
    sidebarVis: {
        addFieldVis: false,
        settingsVis: true,
        sectionSettingsVis: false,
        selectedSection: ""
    },

    setSidebarVis: (sidebarVis) => set(() => ({sidebarVis: sidebarVis}))

}))