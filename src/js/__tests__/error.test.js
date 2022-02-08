import errorList from "../ErrorList";
import ErrorRepository from "../ErrorRepository";

test('Получение описания ошибки по коду', () => {
    const error1 = new ErrorRepository();
    const received = error1.translate(404);
    const result = 'Not Found';
    expect(received).toBe(result);
    });
    
test('Получение описания ошибки по коду', () => {
    const error1 = new ErrorRepository(Object.entries(errorList));
    const received = error1.translate(503);
    const result = 'Service Unavailable';
    expect(received).toBe(result);
    });

test('Unknown error', () => {
    const error10 = new ErrorRepository();
    const received = error10.translate(102);
    const result = "Unknown error";
    expect(received).toBe(result);
    });

test("unused expression", () => {
    const error2 = new ErrorRepository();
    error2.errors.set(105, "unused expression");
    const received = error2.translate(105);
    const result = "unused expression";
    expect(received).toBe(result);
    });