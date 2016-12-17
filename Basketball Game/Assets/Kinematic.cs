// From source : 
// http://vilbeyli.github.io/Simple-Trajectory-Motion-Example-Unity3D/

using UnityEngine;


public class Kinematic : MonoBehaviour {

    public Rigidbody rb;
    public Vector3 velocity = Vector3.zero;
    public bool stop = false;
    public Vector3 target;
	public Collider a;
//	public Text text;


    private bool _targetReach = false;
    private GameObject go;

    [Range(10f, 80f)] public float angle;
    [Range(10f, 80f)] public float dist;  
    
    void Start() {
        rb = GetComponent<Rigidbody>();
		go = GameObject.Find("Obstacle");


    }
    
    void FixedUpdate() {
		if(!_targetReach) {
			if(Input.GetKey(KeyCode.Space)){
    	   Launch();	
			}
    	}
    	
    }

    void Movez() {
    	float timestep = Time.fixedDeltaTime;
        velocity.z += timestep;
        
        if(stop) {
        	return;
        }

        rb.MovePosition((Vector3)rb.position + velocity * timestep);
    }

    private void Launch() {
	    Vector3 pos = transform.position;

	    //float dist = Vector3.Distance(go.transform.position, pos);

        float Vi = Mathf.Sqrt(dist * - Physics.gravity.y / (Mathf.Sin(Mathf.Deg2Rad * angle * 2)));
	    float Vy, Vz; 

	    transform.LookAt(target); 

	    Vy = Vi * Mathf.Sin(Mathf.Deg2Rad * angle);
	    Vz = Vi * Mathf.Cos(Mathf.Deg2Rad * angle);

	    Vector3 localVelocity = new Vector3(0f, Vy, Vz);
	    
	    Vector3 globalVelocity = transform.TransformVector(localVelocity);

	    rb.velocity = globalVelocity;

	    _targetReach = true;
	}

    void OnTriggerEnter(Collider other)
	{
		Debug.Log ("I hit something!");
		stop = true;

//	}
//	void update(){
//		
//		if (a.collision.tag == "object")
//			text.text = "Trigger works";
	}
}
	

	