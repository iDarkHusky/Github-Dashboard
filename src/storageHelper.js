const defaultEngine = sessionStorage;

export const saveItem = (key, value, engine = defaultEngine) =>
    engine.setItem(key, JSON.stringify(value));

export const getItem = (key, engine = defaultEngine) =>
    JSON.parse(engine.getItem(key));
