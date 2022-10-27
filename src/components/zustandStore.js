import create from 'zustand';

export const useFormVarsStore = create((set) => ({

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
    formData: "",

    rawCSS: "",
    setRawCSS: (rawCSS) => set(() => ({rawCSS: rawCSS})),
}))