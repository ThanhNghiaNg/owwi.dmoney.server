import Type from '../models/Type'

export const createTypeRepository = async ({ name, description }: { name: string; description: string }) => {
  const type = await new Type({ name, description })
  return await type.save()
}

export const getTypesRepository = async ()=>{
    const types = await Type.find();
    return types;
}

export const getTypeByIdRepository = async ({id}:{id:string})=>{
  const types = await Type.findById(id);
    return types;
}
