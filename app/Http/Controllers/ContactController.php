<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
  public function __construct()
  {
    $this->middleware(['auth']);
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {

    $search = $request->input('search');

    //if search is not empty, set contacts to search results
    if($search !== null && $search !== "") {

      //remove suspicious inputs
      $search = preg_replace('/[^\sa-z.-]/i', '', $search);

      // $contacts = Contact::where("name", "LIKE", "%$search%")

      //case insensitive search
      $contacts = Contact::whereRaw("LOWER( name ) LIKE '%". strtolower($search)."%'")
        ->orderBy('name', 'asc')->paginate(10)->onEachSide(2);;

    }else {
      //search is empty, set contacts to default
      $contacts = Contact::orderBy('name', 'asc')->paginate(10)->onEachSide(2);
    }

    // dd($contacts);

    return Inertia::render('Contacts/index', [
      'contacts' => $contacts
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    return Inertia::render('Contacts/Create');
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(ContactRequest $request)
  {
    //validate
    $valid = $request->validated();

    //create contact
    Contact::create($valid);

    //redirect to contacs and flash a success message
    return redirect()->route('contacts');
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Contact  $contact
   * @return \Illuminate\Http\Response
   */
  public function show(Contact $contact)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Contact  $contact
   * @return \Illuminate\Http\Response
   */
  public function edit(Contact $contact)
  {
    return Inertia::render('Contacts/Edit', [
      'contact' => $contact
    ]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Contact  $contact
   * @return \Illuminate\Http\Response
   */
  public function update(ContactRequest $request, Contact $contact)
  {
    //validate
    $valid = $request->validated();

    //update contact
    $contact->update($valid);

    //return and flash as success message to session
    return back();
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Contact  $contact
   * @return \Illuminate\Http\Response
   */
  public function destroy(Contact $contact)
  {
    //delete the contact
    $contact->delete();

    //redirect to contacts index
    return redirect()->route('contacts');
  }
}
