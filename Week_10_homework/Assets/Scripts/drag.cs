using UnityEngine;
using System.Collections;

public class drag : MonoBehaviour {

	public GameObject player;
	private Vector3 offset;

	// Use this for initialization
	void Start () {
		offset = transform.position - player.transform.position;
	}
	

	//follow cameras, procedural Animations, its best to use late update
	//late update runs all items have been processed


	void LateUpdate() {
		transform.position = player.transform.position + offset;
	}
}

//homework add timer 
//make game interesting