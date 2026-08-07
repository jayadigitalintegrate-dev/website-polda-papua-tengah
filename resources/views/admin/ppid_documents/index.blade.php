<x-app-layout>

    <x-slot name="header">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
                <h2 class="text-2xl font-bold text-gray-800">
                    Dokumen PPID
                </h2>

                <p class="text-sm text-gray-500 mt-1">
                    Kelola seluruh dokumen PPID Polda Papua Tengah.
                </p>
            </div>

            <a href="{{ route('ppid-documents.create') }}"
                class="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                + Tambah Dokumen
            </a>

        </div>
    </x-slot>

    <div class="py-8">

        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

            <div class="bg-white rounded-xl shadow">

                {{-- FORM SEARCH --}}
                <div class="p-6 border-b">

                    <form method="GET" action="{{ route('ppid-documents.index') }}"
                        class="grid grid-cols-1 md:grid-cols-4 gap-4">

                        <input type="text" name="search" value="{{ request('search') }}" placeholder="Cari dokumen..."
                            class="rounded-lg border-gray-300">

                        <select name="category" class="rounded-lg border-gray-300">

                            <option value="">
                                Semua Kategori
                            </option>

                            @foreach($categories as $category)
                                <option value="{{ $category->id }}" @selected(request('category') == $category->id)>
                                    {{ $category->name }}
                                </option>
                            @endforeach

                        </select>

                        <select name="status" class="rounded-lg border-gray-300">

                            <option value="">
                                Semua Status
                            </option>

                            <option value="published" @selected(request('status') == 'published')>
                                Published
                            </option>

                            <option value="draft" @selected(request('status') == 'draft')>
                                Draft
                            </option>

                        </select>

                        <button type="submit" class="rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                            Cari
                        </button>

                    </form>

                </div>

                {{-- BULK ACTION TOOLBAR & FORM --}}
                <form id="bulk-form" method="POST">
                    @csrf

                    <div class="p-6 pb-0">
                        <div class="mb-5 flex flex-wrap items-center gap-3">

                            <button type="button" id="bulk-delete"
                                class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
                                🗑 Hapus Terpilih
                            </button>

                            <button type="button" id="bulk-publish"
                                class="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700">
                                🟢 Publish
                            </button>

                            <button type="button" id="bulk-draft"
                                class="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-600">
                                🟡 Draft
                            </button>

                            <span id="selected-count"
                                class="ml-auto rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-600">
                                0 dipilih
                            </span>

                        </div>
                    </div>

                    <div class="overflow-x-auto">

                        <table class="min-w-full divide-y divide-gray-200">

                            <thead class="bg-gray-50">

                                <tr>

                                    <th class="w-12 px-4 py-3 text-center">

                                        <input id="check-all" type="checkbox"
                                            class="h-4 w-4 rounded border-gray-300 text-blue-600">

                                    </th>

                                    <th class="px-4 py-3 text-left">
                                        Judul
                                    </th>

                                    <th class="px-4 py-3 text-left">Kategori</th>
                                    <th class="px-4 py-3 text-center">Tahun</th>
                                    <th class="px-4 py-3 text-center">Status</th>
                                    <th class="px-4 py-3 text-center">Download</th>
                                    <th class="px-4 py-3 text-center">View</th>
                                    <th class="px-4 py-3 text-center">Aksi</th>

                                </tr>

                            </thead>

                            <tbody>

                                @forelse($documents as $document)

                                    <tr class="border-t hover:bg-gray-50">

                                        <td class="px-4 py-4 text-center">

                                            <input type="checkbox"
                                                class="row-check h-4 w-4 rounded border-gray-300 text-blue-600"
                                                name="ids[]"
                                                value="{{ $document->id }}">

                                        </td>

                                        <td class="px-4 py-4">
                                            {{ $document->title }}
                                        </td>

                                        <td class="px-4 py-4">
                                            {{ optional($document->category)->name }}
                                        </td>

                                        <td class="px-4 py-4 text-center">
                                            {{ $document->publication_year ?? '-' }}
                                        </td>

                                        <td class="px-4 py-4 text-center">
                                            <span
                                                class="rounded-full px-3 py-1 text-xs font-semibold {{ $document->status == 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700' }}">
                                                {{ ucfirst($document->status) }}
                                            </span>
                                        </td>

                                        <td class="px-4 py-4 text-center">
                                            {{ $document->download_count }}
                                        </td>

                                        <td class="px-4 py-4 text-center">
                                            {{ $document->view_count }}
                                        </td>

                                        <td class="px-4 py-4">

                                            <div class="flex flex-col gap-2">

                                                <a href="{{ route('ppid-documents.show', $document) }}"
                                                    class="rounded bg-sky-600 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-sky-700">
                                                    Detail
                                                </a>

                                                <a href="{{ route('ppid-documents.edit', $document) }}"
                                                    class="rounded bg-amber-500 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-amber-600">
                                                    Edit
                                                </a>

                                                <form action="{{ route('ppid-documents.destroy', $document) }}"
                                                    method="POST"
                                                    onsubmit="return confirm('Yakin ingin menghapus dokumen ini?')">

                                                    @csrf
                                                    @method('DELETE')

                                                    <button type="submit"
                                                        class="w-full rounded bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-700">
                                                        Hapus
                                                    </button>

                                                </form>

                                            </div>

                                        </td>

                                    </tr>

                                @empty

                                    <tr>

                                        <td colspan="8" class="py-10 text-center text-gray-500">

                                            Belum ada dokumen PPID.

                                        </td>

                                    </tr>

                                @endforelse

                            </tbody>

                        </table>

                    </div>

                    <div class="border-t p-6">

                        {{ $documents->links() }}

                    </div>

                </form>

            </div>

        </div>

    </div>

    {{-- SCRIPT BULK ACTION --}}
    <script>

    document.addEventListener('DOMContentLoaded', function () {

        const form = document.getElementById('bulk-form');

        const checkAll = document.getElementById('check-all');

        const rowChecks =
            document.querySelectorAll('.row-check');

        const counter =
            document.getElementById('selected-count');

        function updateCounter() {

            let total = 0;

            rowChecks.forEach(item => {

                if (item.checked) {

                    total++;

                }

            });

            counter.innerText = total + ' dipilih';

        }

        if (checkAll) {

            checkAll.addEventListener('change', function () {

                rowChecks.forEach(item => {

                    item.checked = this.checked;

                });

                updateCounter();

            });

        }

        rowChecks.forEach(item => {

            item.addEventListener('change', updateCounter);

        });

        function submitBulk(route) {

            const checked =
                document.querySelectorAll('.row-check:checked');

            if (checked.length === 0) {

                alert('Pilih minimal satu dokumen.');

                return;

            }

            form.action = route;

            form.submit();

        }

        document
            .getElementById('bulk-delete')
            .addEventListener('click', function () {

                if (
                    confirm(
                        'Yakin ingin menghapus dokumen yang dipilih?'
                    )
                ) {

                    submitBulk(
                        "{{ route('ppid-documents.bulk-delete') }}"
                    );

                }

            });

        document
            .getElementById('bulk-publish')
            .addEventListener('click', function () {

                submitBulk(
                    "{{ route('ppid-documents.bulk-publish') }}"
                );

            });

        document
            .getElementById('bulk-draft')
            .addEventListener('click', function () {

                submitBulk(
                    "{{ route('ppid-documents.bulk-draft') }}"
                );

            });

    });

    </script>

</x-app-layout>