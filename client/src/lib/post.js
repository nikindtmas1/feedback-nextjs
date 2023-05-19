
export async function getFeedbacksData() {
    
    const responce = await fetch("http://localhost:5000/feedbacks");
    const jsonData = await responce.json();
    return jsonData;
};

