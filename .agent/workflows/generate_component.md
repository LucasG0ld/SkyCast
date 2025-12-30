---
description: Generate Atomic Component
---

# Workflow: Generate Atomic Component

## 1. Trigger
This workflow is triggered by the command: `/component [name] [level] [description]`
- **[name]**: PascalCase name of the component (e.g., `WeatherCard`).
- **[level]**: atom | molecule | organism.
- **[description]**: Brief explanation of features and props.

## 2. Objective
Generate a standardized React Native (Expo) component following the **SkyCast Architecture** (Atomic Design + Separation of Concerns).

## 3. Execution Steps

### Step 1: Folder Selection
Determine the target directory based on `[level]`:
- `atom` ➔ `src/components/atoms/[name]/`
- `molecule` ➔ `src/components/molecules/[name]/`
- `organism` ➔ `src/components/organisms/[name]/`

### Step 2: File Generation
Create the following file structure for the component:
1.  **`index.ts`**: Clean export of the component.
2.  **`[name].tsx`**: The UI (Display) component. Use only functional components and arrow functions.
3.  **`[name].styles.ts`**: `StyleSheet.create()` definitions. Apply glassmorphism rules if required.
4.  **`[name].types.ts`**: TypeScript interfaces for Props.
5.  **`use[name].ts`** (Optional): Create this custom hook ONLY if the component requires complex logic or state.

### Step 3: Coding Standards Checklist
- **Strict Typing**: Use the interface from `[name].types.ts`.
- **Styling**: No inline styles. Use the styles from `[name].styles.ts`.
- **Atomic Rules**: 
    - Atoms must not contain other atoms.
    - Molecules are groups of atoms.
    - Organisms are groups of molecules/atoms.
- **Glassmorphism**: If the description mentions "card" or "overlay", implement `ExpoBlur` with thin borders.

### Step 4: Export Update
If a `src/components/[level]/index.ts` exists, update it to include the new component export.

## 4. Template Example (Prompt Output Style)
When executing, the agent should output:
"Creating [level] component: [name]... 
- [x] Props interface defined.
- [x] UI component structured.
- [x] Styles separated.
- [x] Exported from [level] index."