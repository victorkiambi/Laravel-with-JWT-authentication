<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;
use JWTAuth;


class StudentController extends Controller
{

   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $students = new Student();
        $students = Student::all();
        return $students;
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $students = new Student();
        $students = Student::find($id);
 
    if (!$students) {
        return response()->json([
            'success' => false,
            'message' => 'Sorry, student with id ' . $id . ' cannot be found'
        ], 400);
    }
 
    return $students;
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $this->validate(request(), [
            'name' => 'required',
            'age' => 'required|integer',
            'grade' => 'required|integer',
            'term' => 'required|integer'
            // 'guardian' => 'required',
            // 'contact' => 'required|integer'
        ]);

        // return $request;
        $students = new Student();
        $students->stud_name = $request->name;
        $students->stud_age = $request->age;
        $students->stud_grade = $request->grade;
        $students->stud_term = $request->term;
        // $students->guardian_name = $request->guardian;
        // $students->guardian_contact = $request->contact;
        $students->save();
       
     
        if ($students)
            return response()->json([
                'success' => true,
                'students' => $students
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Sorry, student could not be added'
            ], 500);
    }

    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        //
    }
}
