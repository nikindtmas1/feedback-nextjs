import { post } from "../services/feedbackServices";

export async function fetchPeshoDataFromAPI() {
  try {
    // Make a GET request to the API endpoint
    const response = await fetch("http://localhost:5000/peshofeedbacks");

    // Check if the response is successful
    if (response.ok) {
      // Parse the JSON data from the response
      const data = await response.json();
      return data;
    } else {
      // Handle errors if the response is not successful
      throw new Error("Failed to fetch data from the API");
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be handled elsewhere, if necessary
  }
}

export async function fetchPeshoDataToAPI(data) {
  try {
    // Make a POST request to the API endpoint with JSON data
    const response = await fetch("http://localhost:5000/peshofeedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
      },
      body: JSON.stringify(data), // Convert data to JSON string
    });

    // Check if the response is successful
    if (response.ok) {
      // Parse the JSON data from the response (if necessary)
      const responseData = await response.json();
      return responseData;
    } else {
      // Handle errors if the response is not successful
      throw new Error("Failed to send data to the API");
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error("Error sending data:", error);
    throw error; // Rethrow the error to be handled elsewhere, if necessary
  }
}

export async function fetchUpdatePeshoDataToAPI(id, updatedData) {
  try {
    // Make a PUT or PATCH request to the API endpoint with updated data
    const response = await fetch(`http://localhost:5000/peshofeedbacks/${id}`, {
      method: "PUT", // or 'PATCH' depending on your API endpoint requirements
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
      },
      body: JSON.stringify(updatedData), // Convert updated data to JSON string
    });

    // Check if the response is successful
    if (response.ok) {
      // Parse the JSON data from the response (if necessary)
      const responseData = await response.json();
      return responseData;
    } else {
      // Handle errors if the response is not successful
      throw new Error("Failed to update data on the API");
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error("Error updating data:", error);
    throw error; // Rethrow the error to be handled elsewhere, if necessary
  }
};

export async function fetchTomiDataToAPI(data) {
  try {
    // Make a POST request to the API endpoint with JSON data
    const response = await fetch('http://localhost:5000/tomifeedbacks', {
      method: "POST",
      headers: {
        "Content-Type": "applications/json"// Specify content type as JSON
      },
      body: JSON.stringify(data),// Convert data to JSON string
    });
      // Check if the response is ok
      if(response.ok){
        // Pars the JSON data from the response (if necessary)
        const responseData = await response.json();
        return responseData;
      }else{
        // Handle errors if the responses is not successful
        throw new Error("Failed to send data to API")
      }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error("Error sending data:", error);
    throw error;// Rethrow the error to be handled elsewhere, if necessary
  }
};