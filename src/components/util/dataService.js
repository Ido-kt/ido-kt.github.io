export async function fetchItemData(currentRule) {
  try {
    const response = await fetch(`/data.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch item data");
    }
    const data = await response.json();
    console.log(`Item ${currentRule} is found`);

    // Corrected this line to return the condition directly
    const matchingItem = data.find((item) => item.route === currentRule);
    
    console.log(currentRule);
    console.log(`Match for ${matchingItem}`);

    if (!matchingItem) {  // Fixed condition to check for matchingItem instead of currentRule
      throw new Error(`Data Service - Item with ID ${currentRule} not found`);
    }

    return matchingItem;  // Corrected to return matchingItem only
  } catch (error) {
    throw error;
  }
}

export const DataService = {
  async getData() {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('DataService getData error:', error);
      throw error;
    }
  }
};
