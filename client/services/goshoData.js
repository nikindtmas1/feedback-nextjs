import * as service from '../services/feedbackServices';

const host = 'http://localhost:5000';

service.settings.host = host;

export async function createGoshoFeedback(data) {
    return await service.post(host + "/goshofeedbacks", data);
};