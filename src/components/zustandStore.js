import create from 'zustand';

export const useFormVarsStore = create((set) => ({

    addFieldVis: false,
    toggleAddFieldVis: (addFieldVis) => set(() => ({addFieldVis: addFieldVis})),

    newField: {
        fieldID: "",
        fieldType: "",
    },
    setNewField: (newField) => set(() => ({newField: newField})),

    fieldID: "",
    setFieldID: (fieldID) => set(() => ({fieldID: fieldID})),


    setFieldType: (fieldType) => set(() => ({fieldType: fieldType})),

    fieldText: "",
    setFieldText: (fieldText) => set(() => ({fieldText: fieldText})),

    inputFieldName: "",
    setInputFieldName: (inputFieldName) => set(() => ({inputFieldName: inputFieldName})),

    required: false,
    setRequired: (required) => set(() => ({required: required})),

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