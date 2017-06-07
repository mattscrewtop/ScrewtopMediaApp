export class KeyValueModel<K,V>
{
	Key: K;
	Value: V;

	constructor(key: K, value: V)
	{ 
		this.Key = key;
		this.Value = value;
	};
}