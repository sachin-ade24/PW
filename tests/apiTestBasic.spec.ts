import test, { APIResponse, expect } from "@playwright/test";

test('test1: api basic GET call', async({request})=>{
    const apiGetResponse: APIResponse = await request.get('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': 'reqres_2ae43134a7f54b268452b13b63ca3092'
        },
        timeout: 10000
    });
    const jsonRepresentation: any = await apiGetResponse.json();
    console.log(jsonRepresentation);
    console.log(apiGetResponse.status());
    expect(apiGetResponse.status()).toBe(200);
});

test('test2: api basic POST call', async({request})=>{
    const apiPostResponse: APIResponse = await request.post('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': 'reqres_2ae43134a7f54b268452b13b63ca3092'
        },
        data: {
            name: 'Jhon Von Cena',
            job: 'QA',
            age: 40,
            city: 'Pune'
        },
        timeout: 10000
    });
    expect(apiPostResponse.status()).toBe(201);
    const responseBody: any = await apiPostResponse.json();
    console.log(responseBody);
    console.log(responseBody.name);
    console.log(responseBody.job);
    expect(responseBody.name).toBe('Jhon Von Cena');
    expect(responseBody.age).toBe(40);
    expect(responseBody.city).toBe('Pune');
});

test('test3: api basic PUT call', async({request})=>{
    const apiPutResponse: APIResponse = await request.put('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': 'reqres_2ae43134a7f54b268452b13b63ca3092'
        },
        data:{
            name: 'Jhon Von Cena',
            age: 45,
            job: 'Wrestler',
            city: 'New York'
        },
        timeout: 10000
    });
    expect(apiPutResponse.status()).toBe(200);
    const responseBody = await apiPutResponse.json();
    console.log(responseBody);
    expect(responseBody.job).toBe('Wrestler');
    expect(responseBody.city).toBe('New York');
});

test.only('test4: api basic PATCH call', async({request})=>{
    const apiPatchResponse: APIResponse = await request.patch('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': 'reqres_2ae43134a7f54b268452b13b63ca3092'
        },
        data: {
            age: 50
        },
        timeout: 10000
    });
    expect(apiPatchResponse.status()).toBe(200);
    const responseBody: any = await apiPatchResponse.json();
    console.log(responseBody);
    console.log(responseBody.age);
    expect(responseBody.age).toBe(50);
});

test.only('test5: api basic DELETE call', async({request})=>{
    const apiDeleteResponse: APIResponse = await request.delete('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': 'reqres_2ae43134a7f54b268452b13b63ca3092'
        },
        timeout: 10000
    });
    expect(apiDeleteResponse.status()).toBe(204);
    expect(apiDeleteResponse.body).toBeNull();
});
