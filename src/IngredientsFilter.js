import React from "react";
import Select from "react-select"
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const primary_color = "#7270e6";
const secondary_color = "#7270e64b";

const getAllIngredientsOptions = ( dishesData ) => {
    // Get unique ingredients:
    var ingredients = []
    for (var key in dishesData) {
        ingredients = [...new Set(ingredients.concat(dishesData[key].ingredients))]
    }
    // Create correct format for ingredients in react-select:
    var ingredientsOptions = []
    for (key in ingredients) {
        ingredientsOptions.push({
            value: ingredients[key],
            label: ingredients[key]
        });
    }
    return ingredientsOptions
}

export default function IngredientsFilter({ selectedIngredientes, setSelectedIngredients, dishesData }) {
    const ingredientsOptions = getAllIngredientsOptions(dishesData)

    function handleSelect(data) {
        // Set selected ingredients and update state:
        setSelectedIngredients(data);
    }

    // Return display of dropdown bar with ingredients:
    return (
        <div className="dropdown-container">
            <Select
                components={animatedComponents}
                placeholder={<div className="placeholder-text">Select ingredients</div>}
                isMulti
                options={ingredientsOptions}
                value={selectedIngredientes}
                onChange={handleSelect}
                isSearchable={true}
                styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        '&:hover': { borderColor: primary_color},
                        border: '1px solid',
                        borderColor: secondary_color,
                        boxShadow: 'none',
                    }),
                    option: (styles, { isDisabled, isFocused, isSelected }) => {
                        return {
                          ...styles,
                          backgroundColor: isSelected
                            ? secondary_color
                            : isFocused
                            ? secondary_color
                            : undefined,
                        ':active': {
                            ...styles[':active'],
                            backgroundColor: !isDisabled
                                ? isSelected
                                ? primary_color
                                : secondary_color
                                : undefined,
                            },
                        }
                    },
                    dropdownIndicator: base => ({
                        ...base,
                        color: primary_color
                    }),
                    multiValue: (styles) => ({
                        ...styles,
                        backgroundColor: primary_color
                    }),
                    multiValueLabel: (styles) => ({
                        ...styles,
                        color: "white"
                    }),
                    multiValueRemove: (styles) => ({
                        ...styles,
                        color: "white"
                    }),
                }}
            />
        </div>
    );
};